from flask import Flask, request, jsonify, stream_with_context, Response
from webscrape import company_webscraper, company_project_reccomender, company_traits_webscraper
from llm import SynsaiLLM   
import json

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

def generate_company_from_traits(company_name):
    try:

        synsai_llm = SynsaiLLM(company_name)

        scraped_pages = company_webscraper(company_name)

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


        scraped_pages = company_project_reccomender(company_name)
        project_reccomendations = synsai_llm.project_recommendation(scraped_pages)
        

        # Create the data structure
        data = {
            'company_name': company_name,
            'scoring': {
                'credibility_score': credibility_score, 
                'referential_score': referential_score, 
                'compliance_score': compliance_score, 
                'credibility_reasoning': credibility_reasoning, 
                'referential_reasoning': referential_reasoning, 
                'compliance_reasoning': compliance_reasoning,
            },
            'project_recommendations': {
                'title1': project_reccomendations[0][0] if len(project_reccomendations) > 0 else 'No recommendation',
                'description1': project_reccomendations[0][1] if len(project_reccomendations) > 0 else 'No description',
                'title2': project_reccomendations[1][0] if len(project_reccomendations) > 1 else 'No recommendation',
                'description2': project_reccomendations[1][1] if len(project_reccomendations) > 1 else 'No description',
                'title3': project_reccomendations[2][0] if len(project_reccomendations) > 2 else 'No recommendation',
                'description3': project_reccomendations[2][1] if len(project_reccomendations) > 2 else 'No description',
            }
        }
        
        # Convert to JSON and yield as SSE
        yield f"data: {json.dumps(data)}\n\n"
    except Exception as e:
        yield f"data: {json.dumps({'error': str(e)})}\n\n"
    yield "event: end\ndata: {}\n\n"

def stream_companies(company_names):
    try:
        for company_name in company_names:
            # First yield the company name being processed
            yield f"data: {json.dumps({'status': 'processing', 'company': company_name})}\n\n"
            
            # Process the company and stream results
            for result in generate_company_from_traits(company_name):
                try:
                    # Try to parse the result to check for errors
                    data = json.loads(result[6:])  # Skip 'data: ' prefix
                    yield f"data: {json.dumps(data)}\n\n"
                except json.JSONDecodeError:
                    # If it's not valid JSON, send it as an error
                    yield f"data: {json.dumps({'error': 'Invalid JSON response'})}\n\n"
    except Exception as e:
        return [{'error': str(e)}]

@app.route('/company_traits_webscraper', methods=['POST'])
def company_traits_webscraper_stream():
    company_traits = request.json.get('company_traits')
    if not company_traits:
        return jsonify({'error': 'Company traits are required'}), 400

    def generate():
        try:
            scraped_pages = company_traits_webscraper(company_traits)
            if 'error' in scraped_pages:
                yield f"data: {json.dumps({'error': scraped_pages['error']})}\n\n"
                return

            company_names = SynsaiLLM.get_company_names(scraped_pages)

            #company_names = ["ING bank", "BDO", "MetroBank"]
            
            for company_name in company_names:
                for result in generate_company_from_traits(company_name):
                    if result.startswith('data: '):
                        try:
                            data = json.loads(result[6:].strip())
                            if 'error' not in data:  # Skip error messages
                                yield f"data: {json.dumps(data)}\n\n"
                        except json.JSONDecodeError:
                            continue
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
        finally:
            yield "event: end\ndata: {}\n\n"
    
    return Response(generate(), mimetype='text/event-stream', headers={
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no'
    })

if __name__ == '__main__':
    app.run(debug=True, port=5001)