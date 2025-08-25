try:
    from .webscrape import company_webscraper, company_project_reccomender, company_traits_webscraper
    from .synseai_llm import SynseaiLLM
except ImportError:
    from webscrape import company_webscraper, company_project_reccomender, company_traits_webscraper
    from synseai_llm import SynseaiLLM


def company_scoring_scrape(company):
    credibility_scores = []
    referential_scores = []  
    compliance_scores = []

    try:
        scraped_pages = company_webscraper(company)

        synseai_llm = SynseaiLLM(company)

        for pages in scraped_pages:
            if pages['criteria'] == 'credibility':
                credibility_score = synseai_llm.get_company_score(pages, 'credibility')
                credibility_scores.append(credibility_score)
            elif pages['criteria'] == 'referential':
                referential_score = synseai_llm.get_company_score(pages, 'referential')
                referential_scores.append(referential_score)
            elif pages['criteria'] == 'compliance':
                compliance_score = synseai_llm.get_company_score(pages, 'compliance')
                compliance_scores.append(compliance_score)

        # Calculate average scores only if we have scores
        credibility_score = sum(credibility_scores) / len(credibility_scores) if credibility_scores else 0.0
        referential_score = sum(referential_scores) / len(referential_scores) if referential_scores else 0.0
        compliance_score = sum(compliance_scores) / len(compliance_scores) if compliance_scores else 0.0

        # Only get reasonings if we have scores for that criteria
        credibility_reasoning = synseai_llm.company_score_reasoning('credibility') if credibility_scores else 'No credibility data available'
        referential_reasoning = synseai_llm.company_score_reasoning('referential') if referential_scores else 'No referential data available'
        compliance_reasoning = synseai_llm.company_score_reasoning('compliance') if compliance_scores else 'No compliance data available'

        return {
            'credibility_score': credibility_score,
            'referential_score': referential_score,
            'compliance_score': compliance_score,
            'credibility_reasoning': credibility_reasoning,
            'referential_reasoning': referential_reasoning,
            'compliance_reasoning': compliance_reasoning
        }
    except Exception as e:
        return {
            'error': str(e)
        }

def company_project_recommendation_scrape(company):
    try:

        scraped_pages = company_project_reccomender(company)
 
        synseai_llm = SynseaiLLM(company)

        project_reccomendations = synseai_llm.project_recommendation(scraped_pages)

        return {
            'title1': project_reccomendations[0][0],
            'description1': project_reccomendations[0][1],
            'title2': project_reccomendations[1][0],
            'description2': project_reccomendations[1][1],
            'title3': project_reccomendations[2][0],
            'description3': project_reccomendations[2][1],
        }
    except Exception as e:
        return {
            'error': str(e)
        }


def company_names_from_traits(company_traits):
    if not company_traits:
        return {
            'error': 'Company traits are required'
        }

    try:
        scraped_pages = company_traits_webscraper(company_traits)
        company_names = SynseaiLLM.get_company_names(scraped_pages)

        return company_names
    except Exception as e:
        return {
            'error': str(e)
        }


def company_name_webscraper(company_name):
    
    if not company_name:
        return {
            'error': 'Company name is required'
        }

    try:
        synseai_llm = SynseaiLLM(company_name)

        scraped_pages = company_webscraper(company_name)

        credibility_scores = []
        referential_scores = []
        compliance_scores = []

        for pages in scraped_pages:
            if pages['criteria'] == 'credibility':
                credibility_score = synseai_llm.get_company_score(pages, 'credibility')
                credibility_scores.append(credibility_score)
            elif pages['criteria'] == 'referential':
                referential_score = synseai_llm.get_company_score(pages, 'referential')
                referential_scores.append(referential_score)
            elif pages['criteria'] == 'compliance':
                compliance_score = synseai_llm.get_company_score(pages, 'compliance')
                compliance_scores.append(compliance_score)

        # Calculate average scores only if we have scores
        credibility_score = sum(credibility_scores) / len(credibility_scores) if credibility_scores else 0.0
        referential_score = sum(referential_scores) / len(referential_scores) if referential_scores else 0.0
        compliance_score = sum(compliance_scores) / len(compliance_scores) if compliance_scores else 0.0

        # Only get reasonings if we have scores for that criteria
        credibility_reasoning = synseai_llm.company_score_reasoning('credibility') if credibility_scores else 'No credibility data available'
        referential_reasoning = synseai_llm.company_score_reasoning('referential') if referential_scores else 'No referential data available'
        compliance_reasoning = synseai_llm.company_score_reasoning('compliance') if compliance_scores else 'No compliance data available'

        scraped_pages = company_project_reccomender(company_name)
        project_reccomendations = synseai_llm.project_recommendation(scraped_pages)
        
        # Create the data structure
        data = {
            'company_name': company_name,
            'credibility_score': credibility_score, 
            'referential_score': referential_score, 
            'compliance_score': compliance_score, 
            'credibility_reasoning': credibility_reasoning, 
            'referential_reasoning': referential_reasoning, 
            'compliance_reasoning': compliance_reasoning,
            'project_title1': project_reccomendations[0][0] if len(project_reccomendations) > 0 else 'No recommendation',
            'project_description1': project_reccomendations[0][1] if len(project_reccomendations) > 0 else 'No description',
            'project_title2': project_reccomendations[1][0] if len(project_reccomendations) > 1 else 'No recommendation',
            'project_description2': project_reccomendations[1][1] if len(project_reccomendations) > 1 else 'No description', 
            'project_title3': project_reccomendations[2][0] if len(project_reccomendations) > 2 else 'No recommendation',
            'project_description3': project_reccomendations[2][1] if len(project_reccomendations) > 2 else 'No description',
        }
        
        return data
        
    except Exception as e:
        return {
            'error': str(e)
        }