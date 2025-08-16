from flask import Flask, request, jsonify
from webscrape import company_webscraper
from llm import SynsaiLLM

app = Flask(__name__)

@app.route('/scrape', methods=['POST'])
def scrape():

    company = request.json.get('company')
    if not company:
        return jsonify({'error': 'Company name is required'}), 400

    credibility_scores = []
    referential_scores = []  

    try:
        result = company_webscraper(company)

        synsai_llm = SynsaiLLM(company)

        for pages in result:
            if pages['criteria'] == 'credibility':
                credibility_score = synsai_llm.get_company_score(pages, 'credibility')
                credibility_scores.append(credibility_score)
                print(credibility_score)
            elif pages['criteria'] == 'referential':
                referential_score = synsai_llm.get_company_score(pages, 'referential')
                referential_scores.append(referential_score)
                print(referential_score)

        credibility_score = sum(credibility_scores) / len(credibility_scores)
        referential_score = sum(referential_scores) / len(referential_scores)

        credibility_reasoning = synsai_llm.company_score_reasoning('credibility')
        referential_reasoning = synsai_llm.company_score_reasoning('referential')


        return jsonify({
            'status': 'success',
            'data': {
                'credibility_score': credibility_score,
                'referential_score': referential_score,
                'credibility_reasoning': credibility_reasoning,
                'referential_reasoning': referential_reasoning
            }
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

    
if __name__ == '__main__':
    app.run(debug=True, port=5001)