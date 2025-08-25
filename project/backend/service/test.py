from synseai_llm import SynseaiLLM
from webscrape import company_webscraper


synsai_llm = SynseaiLLM("Amazon")

scraped_pages = company_webscraper("Amazon")

credibility_scores = []
referential_scores = []
compliance_scores = []

for pages in scraped_pages:
    if pages['criteria'] == 'credibility':
        credibility_score = synsai_llm.get_company_score(pages, 'credibility')
        credibility_scores.append(credibility_score)
    elif pages['criteria'] == 'referential':
        referential_score = synsai_llm.get_company_score(pages, 'referential')
        referential_scores.append(referential_score)
    elif pages['criteria'] == 'compliance':
        compliance_score = synsai_llm.get_company_score(pages, 'compliance')
        compliance_scores.append(compliance_score)

    # Calculate average scores only if we have scores
    credibility_score = sum(credibility_scores) / len(credibility_scores) if credibility_scores else 0.0
    referential_score = sum(referential_scores) / len(referential_scores) if referential_scores else 0.0
    compliance_score = sum(compliance_scores) / len(compliance_scores) if compliance_scores else 0.0

    # Only get reasonings if we have scores for that criteria
    credibility_reasoning = synsai_llm.company_score_reasoning('credibility') if credibility_scores else 'No credibility data available'
    referential_reasoning = synsai_llm.company_score_reasoning('referential') if referential_scores else 'No referential data available'
    compliance_reasoning = synsai_llm.company_score_reasoning('compliance') if compliance_scores else 'No compliance data available'

