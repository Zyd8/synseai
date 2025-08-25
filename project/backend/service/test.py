from synseai_llm import SynseaiLLM
from webscraper import company_traits_webscraper

scraped_pages = company_traits_webscraper("Technology")
company_names = SynseaiLLM.get_company_names(scraped_pages)
print(company_names)




