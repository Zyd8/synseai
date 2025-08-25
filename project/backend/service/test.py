from synseai_llm import SynseaiLLM
from webscrape import company_traits_webscraper

scraped_pages = company_traits_webscraper("Fast Food")
company_names = SynseaiLLM.get_company_names(scraped_pages)
print(company_names)




