import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
from googlesearch import search
import time
import random
import yaml
import os

# Set up headers to mimic a browser
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.0.0',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
}

def get_configuration():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    config_path = os.path.join(script_dir, 'config.yaml')
    
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            config = yaml.safe_load(f)
        return config or {}  
    except FileNotFoundError:
        print(f"Error: config.yaml not found at {config_path}")
        return {}
    except yaml.YAMLError as e:
        print(f"Error parsing YAML config: {e}")
        return {}

def ensure_url_scheme(url):
    # Ensure URL has a scheme
    if not urlparse(url).scheme:
        url = 'https://' + url.lstrip('/')
    return url

def search_random_delay(min_delay, max_delay):
    time.sleep(random.uniform(
        min_delay,
        max_delay
    ))

def fetch_url(url, timeout):
    session = requests.Session()
    try:
        response = session.get(
            url,
            headers=HEADERS,
            timeout=timeout
        )
        response.raise_for_status()
        return response
    except requests.HTTPError as e:
        if e.response.status_code == 403:
            print(f"403 Forbidden for {url}, trying next link...")
            return None
        raise

def is_binary_content(text):
    """Check if the content appears to be binary or unreadable."""
    if not text:
        return True
        
    # Check for high ratio of non-printable characters
    printable_ratio = sum(1 for char in text if 32 <= ord(char) <= 126 or char in '\n\r\t') / len(text)
    if printable_ratio < 0.7:  # Less than 70% printable ASCII
        return True
        
    # Check for common binary patterns
    binary_indicators = [
        '\x00',  # Null bytes
        '\x1f',  # ASCII control characters
        '\x7f',  # DEL character
        '\x80\x81',  # Common in binary data
    ]
    
    return any(indicator in text for indicator in binary_indicators)

def is_text_valid(soup):
    valid = True
    try:
        if not soup.find():
            valid = False

        if is_binary_content(soup.get_text()):
            valid = False

        if not soup.get_text() or len(soup.get_text().strip()) == 0:
            valid = False

        # Check for common error messages or placeholders
        error_phrases = [
            "enable javascript", "please wait", "cloudflare", "captcha", 
            "access denied", "you need to enable javascript", "browser requirements"
        ]
        
        lower_text = soup.get_text().lower()
        if any(phrase in lower_text for phrase in error_phrases):
            valid = False
        
    except Exception as e:
        print(f"Error extracting text: {str(e)}")
        return False

    return valid


def extract_clean_text(soup):
    """Extract and clean text content from BeautifulSoup object.
    Note: This function assumes the soup has already been validated by is_text_valid().
    """
    try:
        # Remove script and style elements
        for script in soup(["script", "style", "noscript", "meta", "link", "svg", "img"]):
            script.decompose()
        
        # Get text and clean it up
        text = soup.get_text(separator=' ', strip=True)
        
        # Remove excessive whitespace and newlines
        text = ' '.join(text.split())
        
        return text
        
    except Exception as e:
        print(f"Error extracting text: {str(e)}")
        return "[Content not available: Error processing content]"

def company_project_reccomender(company_name):
    """Scrape project recommendation context for a company"""
    config = get_configuration()
    if not config:
        return {"error": "Configuration not found"}
        
    search_settings = config.get('search_settings', {})
    pr_config = config.get('project_recommendation', {})
    
    # Format context queries with the company name
    context_queries = [
        query.format(company_name=company_name)
        for query in pr_config.get('context', [])
    ]
    
    if not context_queries:
        return {"error": "No project recommendation context queries found in config"}
    
    results = []
    valid_results = 0
    
    for query in context_queries:
        search_results = search(
            query,
            num_results=search_settings.get('num_results'),  
            lang="en",
            sleep_interval=search_settings.get('min_delay'),
            timeout=search_settings.get('timeout')
        )
        
        search_results = list(search_results)
        if not search_results:
            continue
            
        for result_url in search_results:

            if valid_results >= search_settings.get('target_num_results', 1):
                break
            
            url = ensure_url_scheme(result_url)
            search_random_delay(
                search_settings.get('min_delay'),
                search_settings.get('max_delay')
            )
            
            try:
                response = fetch_url(
                    url,
                    search_settings.get('timeout')
                )
                if response is None:  
                    print("NO RESPONSE, SKIPPED")
                    continue
                    
                soup = BeautifulSoup(response.content, 'html.parser')

                if not is_text_valid(soup):
                    print("INVALID TEXT, SKIPPED")
                    continue
                
                text = extract_clean_text(soup)
                
                results.append({
                    'query': query,
                    'url': url,
                    'content': text
                })
                valid_results += 1
                
            except Exception as e:
                print(f"Error processing {url}: {str(e)}")
                continue  
    
    return {
        'context': results
    }

def company_webscraper(company_name):
    config = get_configuration()
    search_settings = config.get('search_settings', {})
    results = []
    
    # Get configuration values with defaults
    num_results = search_settings.get('num_results', 5)
    target_results_per_term = search_settings.get('target_num_results', 2)
    
    # Track valid results per criteria and term
    criteria_results = {}
    
    # First pass: collect all search results for each term
    search_links = {}
    for criteria_name, terms in config.get("criteria", {}).items():
        criteria_results[criteria_name] = {}
        for term in terms:
            criteria_results[criteria_name][term] = 0
            try:
                # Get more results than we need as fallback
                links = search(
                    f"{term} {company_name}",
                    num_results=num_results,
                    advanced=True
                )
                search_links[(criteria_name, term)] = list(links)
            except Exception as e:
                print(f"Error searching for {company_name} {term}: {str(e)}")
                search_links[(criteria_name, term)] = []
    
    # Second pass: process links until we have enough valid results for each term
    for criteria_name, terms in config.get("criteria", {}).items():
        for term in terms:
            links = search_links.get((criteria_name, term), [])
            
            for result in links:
                # Stop if we have enough valid results for this term
                if criteria_results[criteria_name][term] >= target_results_per_term:
                    break
                    
                try:
                    url = ensure_url_scheme(result.url)
                    
                    search_random_delay(
                        search_settings.get('min_delay', 1),
                        search_settings.get('max_delay', 3)
                    )
                    
                    response = fetch_url(url, search_settings.get('timeout', 10))
                    if response is None:
                        print(f"NO RESPONSE FOR {url}, SKIPPED")
                        continue
                        
                    response.encoding = response.apparent_encoding
                    soup = BeautifulSoup(response.text, 'html.parser')
                    
                    if not is_text_valid(soup):
                        print(f"INVALID TEXT AT {url}, SKIPPED")
                        continue
                    
                    clean_text = extract_clean_text(soup)
                    title = soup.title.string.strip() if soup.title else "No title found"
                    
                    # Only add if we still need more results for this term
                    if criteria_results[criteria_name][term] < target_results_per_term:
                        page_data = {
                            'title': title,
                            'url': url,
                            'criteria': criteria_name,
                            'term': term,
                            'content': clean_text
                        }
                        results.append(page_data)
                        criteria_results[criteria_name][term] += 1
                        print(f"ADDED result for {criteria_name} - {term}: {url}")
                    
                except Exception as e:
                    print(f"Error processing {url}: {str(e)}")
    
    # Log final results count
    for criteria_name, terms in criteria_results.items():
        for term, count in terms.items():
            print(f"Collected {count}/{target_results_per_term} results for {criteria_name} - {term}")
    
    return results

def company_traits_webscraper(company_traits):
    config = get_configuration()
    search_settings = config.get('search_settings', {})
    results = []
    valid_results = 0

    links = search(
        f"Companies known for {company_traits}",
        num_results=search_settings.get('num_results'),
        advanced=True
    )

    for result in links:
        try:
            url = ensure_url_scheme(result.url)

            if valid_results >= search_settings.get('target_num_results', 1):
                break

            search_random_delay(
                search_settings.get('min_delay'),
                search_settings.get('max_delay')
            )

            response = fetch_url(
                url,
                search_settings.get('timeout')
            )
            
            if response is None:
                print("NO RESPONSE, SKIPPED")
                continue

            response.encoding = response.apparent_encoding
                        
            soup = BeautifulSoup(response.text, 'html.parser')

            if not is_text_valid(soup):
                print("INVALID TEXT, SKIPPED")
                continue
            
            clean_text = extract_clean_text(soup)

            page_data = {
                'content': clean_text
            }
            results.append(page_data)
            valid_results += 1
        
        except Exception as e:
            print(f"Error processing {url}: {str(e)}")

    return results
            
    