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

# Load configuration
config_path = os.path.join(os.path.dirname(__file__), 'config.yaml')
with open(config_path, 'r') as f:
    config = yaml.safe_load(f)

# Extract configuration
company = config.get('company', 'Gcash')
search_settings = config.get('search_settings', {})

# Set up search criteria
scoring = [
    config.get('criteria', {}).get('credibility', []),
    config.get('criteria', {}).get('compliance', []),
    config.get('criteria', {}).get('referential', [])
]

for criteria in scoring:
    for term in criteria:
        try:
            links = search(
                f"{company} {term}",
                num_results=search_settings.get('num_results', 1),
                advanced=True
            )
            for result in links:
                
                url = result.url
                # Ensure URL has a scheme
                if not urlparse(url).scheme:
                    url = 'https://' + url.lstrip('/')
                
                try:
                    # Add a random delay between requests to avoid being blocked
                    time.sleep(random.uniform(
                        search_settings.get('min_delay', 1),
                        search_settings.get('max_delay', 3)
                    ))
                    
                    # Make the request with headers
                    session = requests.Session()
                    response = session.get(
                        url,
                        headers=HEADERS,
                        timeout=search_settings.get('timeout', 15)
                    )
                    response.raise_for_status()
                    
                    # Try different encodings if the default one fails
                    response.encoding = response.apparent_encoding
                    
                    soup = BeautifulSoup(response.text, 'html.parser')
                    title = soup.title.string.strip() if soup.title else "No title found"
                    
                    print(f"\n{'='*50}")
                    print(f"Title: {title}")
                    print(f"URL: {url}")
                    print(f"Status: {response.status_code}")
                    
                    # Uncomment to see the first 500 characters of the page
                    # print("\nPreview:", soup.get_text()[:500], "...")
                    
                except requests.exceptions.RequestException as e:
                    if hasattr(e.response, 'status_code'):
                        print(f"\nError accessing {url}")
                        print(f"Status Code: {e.response.status_code}")
                        print(f"Response: {e.response.text[:200]}..." if hasattr(e.response, 'text') else "No response text")
                    else:
                        print(f"\nError: {str(e)}")
        except Exception as e:
            print(f"Error searching for {company} {term}: {str(e)}")

