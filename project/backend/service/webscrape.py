import os
import json
import time
import random
import yaml
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
from typing import List, Dict, Any, Optional, Union, Tuple
from dotenv import load_dotenv


load_dotenv()

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

def company_project_reccomender(company_name: str) -> Dict[str, List[Dict[str, str]]]:
    """Scrape project recommendation context for a company using Google Custom Search API"""
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
    
    for query in context_queries:
        try:
            # Add delay to avoid rate limiting
            search_random_delay(
                search_settings.get('min_delay', 1),
                search_settings.get('max_delay', 5)
            )
            
            # Get search results
            search_items = google_custom_search(
                query=query,
                num_results=search_settings.get('num_results', 3)
            )
            
            if not search_items:
                print(f"No results for query: {query}")
                continue
                
            for item in search_items:
                try:
                    url = ensure_url_scheme(item.get('link', ''))
                    if not url:
                        continue
                        
                    response = fetch_url(url, search_settings.get('timeout', 10))
                    if response is None:
                        print(f"No response from {url}")
                        continue
                        
                    response.encoding = response.apparent_encoding
                    soup = BeautifulSoup(response.text, 'html.parser')
                    
                    if not is_text_valid(soup):
                        print(f"Invalid text content from {url}")
                        continue
                        
                    clean_text = extract_clean_text(soup)
                    
                    results.append({
                        'query': query,
                        'url': url,
                        'title': item.get('title', ''),
                        'content': clean_text
                    })
                    
                    # Check if we have enough results for this query
                    if len([r for r in results if r['query'] == query]) >= search_settings.get('target_num_results', 1):
                        break
                        
                except Exception as e:
                    print(f"Error processing {url}: {str(e)}")
                    continue
                    
        except Exception as e:
            print(f"Error searching for '{query}': {str(e)}")
            continue
    
    return {
        'context': results
    }

def company_webscraper(company_name: str) -> List[Dict[str, str]]:
    """Scrape company information using Google Custom Search API"""
    config = get_configuration()
    if not config:
        print("Error: Configuration not found")
        return []
        
    search_settings = config.get('search_settings', {})
    results = []
    target_results_per_term = search_settings.get('target_num_results', 2)
    
    # Track valid results per criteria and term
    criteria_results = {}
    
    # Process each criteria and term
    for criteria_name, terms in config.get("criteria", {}).items():
        criteria_results[criteria_name] = {term: 0 for term in terms}
        
        for term in terms:
            query = f"{term} {company_name}"
            
            try:
                # Add delay to avoid rate limiting
                search_random_delay(
                    search_settings.get('min_delay', 1),
                    search_settings.get('max_delay', 5)
                )
                
                # Get search results
                search_items = google_custom_search(
                    query=query,
                    num_results=search_settings.get('num_results', 5)
                )
                
                if not search_items:
                    print(f"No results for query: {query}")
                    continue
                    
                # Process each search result
                for item in search_items:
                    if criteria_results[criteria_name][term] >= target_results_per_term:
                        break
                        
                    try:
                        url = ensure_url_scheme(item.get('link', ''))
                        if not url:
                            continue
                            
                        response = fetch_url(url, search_settings.get('timeout', 10))
                        if response is None:
                            print(f"No response from {url}")
                            continue
                            
                        response.encoding = response.apparent_encoding
                        soup = BeautifulSoup(response.text, 'html.parser')
                        
                        if not is_text_valid(soup):
                            print(f"Invalid text content from {url}")
                            continue
                            
                        clean_text = extract_clean_text(soup)
                        title = item.get('title', 'No title found')
                        
                        results.append({
                            'title': title,
                            'url': url,
                            'criteria': criteria_name,
                            'term': term,
                            'content': clean_text,
                            'snippet': item.get('snippet', '')
                        })
                        
                        criteria_results[criteria_name][term] += 1
                        print(f"ADDED result for {criteria_name} - {term}: {url}")
                        
                    except Exception as e:
                        print(f"Error processing {url}: {str(e)}")
                        continue
                        
            except Exception as e:
                print(f"Error searching for '{query}': {str(e)}")
                continue
    
    # Log final results count
    for criteria_name, terms in criteria_results.items():
        for term, count in terms.items():
            print(f"Collected {count}/{target_results_per_term} results for {criteria_name} - {term}")
    
    return results

def get_google_credentials() -> List[Dict[str, str]]:
    """
    Get list of Google API credentials (API keys and Search Engine IDs) from environment variables
    
    Returns:
        List of dicts with 'api_key' and 'cx' (Search Engine ID)
    """
    credentials = []
    
    # Helper function to get values with fallback
    def get_env_var(base_name, index=None):
        if index is not None:
            return os.environ.get(f'{base_name}_{index}') or os.environ.get(base_name) if index == 1 else None
        return os.environ.get(base_name)
    
    # First check for single credential set for backward compatibility
    if 'GOOGLE_API_KEY' in os.environ and 'GOOGLE_SEARCH_ENGINE_ID' in os.environ:
        credentials.append({
            'api_key': os.environ['GOOGLE_API_KEY'],
            'cx': os.environ['GOOGLE_SEARCH_ENGINE_ID']
        })
    
    # Then check for numbered credentials (GOOGLE_API_KEY_1, GOOGLE_SEARCH_ENGINE_ID_1, etc.)
    i = 1
    while True:
        api_key = get_env_var('GOOGLE_API_KEY', i)
        cx = get_env_var('GOOGLE_SEARCH_ENGINE_ID', i)
        
        if not api_key or not cx:
            if i == 1 and not credentials:
                # Only warn if we don't have any credentials at all
                print("Warning: No Google API credentials found in environment variables")
            break
            
        # Add the credential set if both key and cx are present
        credentials.append({
            'api_key': api_key,
            'cx': cx
        })
        i += 1
    
    return credentials

def google_custom_search(query: str, num_results: int = 10, start_index: int = 1) -> List[Dict[str, Any]]:
    """
    Perform a search using Google Custom Search JSON API with API key and Search Engine ID rotation
    
    Args:
        query: Search query string
        num_results: Number of results to return (max 10 per request)
        start_index: Start index for pagination (1-based)
        
    Returns:
        List of search result items
    """
    credentials = get_google_credentials()
    
    if not credentials:
        print("Error: No Google API credentials found in environment variables")
        return []
    
    print("\n=== Google Custom Search API ===")
    print(f"Query: {query}")
    print(f"Available credentials: {len(credentials)} sets")
    for i, cred in enumerate(credentials, 1):
        print(f"  Set {i}: Key ...{cred['api_key'][-4:]} with CX ...{cred['cx'][-4:]}")
    
    base_url = "https://www.googleapis.com/customsearch/v1"
    params = {
        'q': query,
        'num': min(num_results, 10),  # Max 10 results per request
        'start': start_index
    }
    
    last_error = None
    
    for cred_idx, creds in enumerate(credentials, 1):
        try:
            params.update({
                'key': creds['api_key'],
                'cx': creds['cx']
            })
            
            print(f"\n[Attempt {cred_idx}/{len(credentials)}] Using API key ...{creds['api_key'][-4:]} with Search Engine ID ...{creds['cx'][-4:]}")
            
            response = requests.get(base_url, params=params, timeout=10)
            response.raise_for_status()
            data = response.json()
            
            # Log successful usage
            print(f"✓ Success with API key ...{creds['api_key'][-4:]} (CX: ...{creds['cx'][-4:]})")
            if 'searchInformation' in data:
                print(f"   Search time: {data['searchInformation'].get('searchTime', 'N/A')}s")
                print(f"   Total results: {data['searchInformation'].get('totalResults', 'N/A')}")
            
            # If we get here, the request was successful
            return data.get('items', [])
            
        except requests.exceptions.HTTPError as e:
            status_code = getattr(e.response, 'status_code', None)
            error_msg = getattr(e.response, 'text', '').lower()
            
            if status_code == 429 or (status_code == 403 and 'quota' in error_msg):
                print(f"✗ Quota exceeded for API key ...{creds['api_key'][-4:]} (CX: ...{creds['cx'][-4:]})")
                print(f"   Status: {status_code}, Error: {error_msg[:200]}")
                if cred_idx < len(credentials):
                    print("   Trying next credential set...")
                last_error = e
                continue
                
            print(f"✗ HTTP Error with API key ...{creds['api_key'][-4:]} (CX: ...{creds['cx'][-4:]})")
            print(f"   Status: {status_code}, Error: {error_msg[:200]}")
            last_error = e
            continue
            
        except requests.exceptions.RequestException as e:
            print(f"✗ Request failed with API key ...{creds['api_key'][-4:]} (CX: ...{creds['cx'][-4:]})")
            print(f"   Error: {str(e)}")
            last_error = e
            continue
    
    # If we get here, all API keys were exhausted
    print("All API keys exhausted or encountered errors")
    if last_error:
        if hasattr(last_error, 'response') and last_error.response is not None:
            print(f"Last error status: {last_error.response.status_code}")
            print(f"Response: {last_error.response.text[:500]}")
    
    return []

def company_traits_webscraper(company_traits: str) -> List[Dict[str, str]]:
    """
    Search for company information using Google Custom Search API
    
    Args:
        company_traits: Search query for company traits
        
    Returns:
        List of dictionaries containing scraped content from search results
    """
    config = get_configuration()
    if not config:
        print("Error: Configuration not found")
        return []
        
    search_settings = config.get('search_settings', {})
    results = []
    query = f"{company_traits} Companies"
    
    try:
        # Add delay to avoid rate limiting
        search_random_delay(
            search_settings.get('min_delay', 1),
            search_settings.get('max_delay', 5)
        )
        
        # Get search results
        search_items = google_custom_search(
            query=query,
            num_results=search_settings.get('num_results', 5)
        )
        
        if not search_items:
            print("No search results returned from Google Custom Search")
            return results
            
        # Process each search result
        for item in search_items:
            try:
                url = ensure_url_scheme(item.get('link', ''))
                if not url:
                    continue
                    
                response = fetch_url(url, search_settings.get('timeout', 10))
                if response is None:
                    print(f"No response from {url}")
                    continue
                    
                response.encoding = response.apparent_encoding
                soup = BeautifulSoup(response.text, 'html.parser')
                
                if not is_text_valid(soup):
                    print(f"Invalid text content from {url}")
                    continue
                    
                clean_text = extract_clean_text(soup)
                
                results.append({
                    'url': url,
                    'title': item.get('title', ''),
                    'snippet': item.get('snippet', ''),
                    'content': clean_text
                })
                
                # Check if we have enough results
                if len(results) >= search_settings.get('target_num_results', 3):
                    break
                    
            except Exception as e:
                print(f"Error processing {url}: {str(e)}")
                continue
                
    except Exception as e:
        print(f"Error in company_traits_webscraper: {str(e)}")
    
    return results