from flask import Flask, request, jsonify
from webscrape import company_webscraper, company_project_reccomender, company_term_webscraper
from llm import SynsaiLLM

app = Flask(__name__)

@app.route('/company_scoring_scrape', methods=['POST'])
def company_scoring_scrape():

    company = request.json.get('company')
    if not company:
        return jsonify({'error': 'Company name is required'}), 400

    credibility_scores = []
    referential_scores = []  
    compliance_scores = []

    try:
        scraped_pages = company_webscraper(company)

        synsai_llm = SynsaiLLM(company)

        for pages in scraped_pages:
            if pages['criteria'] == 'credibility':
                credibility_score = synsai_llm.get_company_score(pages, 'credibility')
                credibility_scores.append(credibility_score)
                print(credibility_score)
            elif pages['criteria'] == 'referential':
                referential_score = synsai_llm.get_company_score(pages, 'referential')
                referential_scores.append(referential_score)
                print(referential_score)
            elif pages['criteria'] == 'compliance':
                compliance_score = synsai_llm.get_company_score(pages, 'compliance')
                compliance_scores.append(compliance_score)
                print(compliance_score)

        # Calculate average scores only if we have scores
        credibility_score = sum(credibility_scores) / len(credibility_scores) if credibility_scores else 0.0
        referential_score = sum(referential_scores) / len(referential_scores) if referential_scores else 0.0
        compliance_score = sum(compliance_scores) / len(compliance_scores) if compliance_scores else 0.0

        # Only get reasonings if we have scores for that criteria
        credibility_reasoning = synsai_llm.company_score_reasoning('credibility') if credibility_scores else 'No credibility data available'
        referential_reasoning = synsai_llm.company_score_reasoning('referential') if referential_scores else 'No referential data available'
        compliance_reasoning = synsai_llm.company_score_reasoning('compliance') if compliance_scores else 'No compliance data available'

        return jsonify({
            'credibility_score': credibility_score,
            'referential_score': referential_score,
            'compliance_score': compliance_score,
            'credibility_reasoning': credibility_reasoning,
            'referential_reasoning': referential_reasoning,
            'compliance_reasoning': compliance_reasoning
            }
        )
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@app.route('/company_project_recommendation_scrape', methods=['POST'])
def company_project_recommendation_scrape():
    company = request.json.get('company')
    if not company:
        return jsonify({'error': 'Company is required'}), 400

    try:

        scraped_pages = company_project_reccomender(company)
        if 'error' in scraped_pages:
            return jsonify({'error': scraped_pages['error']}), 400    

        print(scraped_pages) 
 
        synsai_llm = SynsaiLLM(company)

        project_reccomendations = synsai_llm.project_recommendation(scraped_pages)

        return jsonify({
            'title1': project_reccomendations[0][0],
            'description1': project_reccomendations[0][1],
            'title2': project_reccomendations[1][0],
            'description2': project_reccomendations[1][1],
            'title3': project_reccomendations[2][0],
            'description3': project_reccomendations[2][1],
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@app.route('/company_traits_webscraper', methods=['POST'])
def company_traits_webscraper():
    company_traits = request.json.get('company_traits')
    if not company_traits:
        return jsonify({'error': 'Company traits are required'}), 400

    try:
        scraped_pages = company_traits_webscraper(company_traits)
        if 'error' in scraped_pages:
            return jsonify({'error': scraped_pages['error']}), 400    

        print(scraped_pages) 

        company_names = SynsaiLLM.get_company_names(scraped_pages)

        # synsai_llm = SynsaiLLM(company_term)

        return jsonify({
            'company_names': company_names
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)