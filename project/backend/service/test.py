
from main import company_scoring_scrape, company_project_recommendation_scrape, company_names_from_traits, company_name_webscraper
from synseai_llm import SynseaiLLM
from webscrape import company_project_reccomender

synseai_llm = SynseaiLLM("ING bank")
scraped_pages = company_project_reccomender("ING bank")
print(synseai_llm.project_recommendation(scraped_pages))
# company_project_recommendation_scrape("ING bank")
# company_names_from_traits("ING bank")
# company_name_webscraper("ING bank")
