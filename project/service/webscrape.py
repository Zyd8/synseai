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
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
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
    response = session.get(
        url,
        headers=HEADERS,
        timeout=timeout
    )
    response.raise_for_status()
    return response

def extract_clean_text(soup):
    """Extract and clean text content from BeautifulSoup object."""
    
    # Get text and clean it up
    text = soup.get_text(separator=' ', strip=True)
    
    # Remove excessive whitespace and newlines
    text = ' '.join(text.split())
    
    return text

def company_webscraper(company):

    config = get_configuration()

    results = []
    
    for criteria_name, terms in config.get("criteria", {}).items():
        for term in terms:
            try:
                links = search(
                    f"{company} {term}",
                    num_results=config.get('search_settings').get('num_results'),
                    advanced=True
                )
                for result in links:
                    try:
                        url = ensure_url_scheme(result.url)

                        search_random_delay(
                            config.get('search_settings').get('min_delay'),
                            config.get('search_settings').get('max_delay')
                        )

                        response = fetch_url(
                            url,
                            config.get('search_settings').get('timeout')
                        )

                        response.encoding = response.apparent_encoding
                        soup = BeautifulSoup(response.text, 'html.parser')
                        clean_text = extract_clean_text(soup)
                        title = soup.title.string.strip() if soup.title else "No title found"

                        page_data = {
                            'title': title,
                            'url': url,
                            'criteria': criteria_name,
                            'term': term,
                            'content': clean_text
                        }
                        results.append(page_data)
                        
                    except Exception as e:
                        print(f"Error processing {url}: {str(e)}")
                        
            except Exception as e:
                print(f"Error searching for {company} {term}: {str(e)}")
    
    return results

