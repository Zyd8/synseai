import requests
from flask import Blueprint, request, jsonify, Response
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, UserRole, CompanyNameScrape
from sqlalchemy import func
import os
from dotenv import load_dotenv
import json

load_dotenv()

find_company_bp = Blueprint('find_company', __name__)

@find_company_bp.route('/name', methods=['POST'])
@jwt_required()
def find_company_by_name():
    """
    Find companies based on search query
    """

    company_name = request.json.get('company')

    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)

    if not user:
        return jsonify({"error": "User not found"}), 404

    if user.role == UserRole.ADMIN or user.role == UserRole.EMPLOYEE:

        # First try exact match (case insensitive)
        company_name_scrape = CompanyNameScrape.query.filter(
            func.lower(CompanyNameScrape.company_name) == func.lower(company_name)
        ).first()
        
        # If no exact match, try fuzzy matching
        if not company_name_scrape:
            search_term = f"%{company_name}%"
            company_name_scrape = CompanyNameScrape.query.filter(
                func.lower(CompanyNameScrape.company_name).like(func.lower(search_term))
            ).first()

        if company_name_scrape:
            return jsonify({
                'company_name_scrape': company_name_scrape.to_dict()
            }), 200

        service_url = os.getenv('COMPANY_SCORING_SCRAPE_URL')
        scoring_response = requests.post(
            service_url,
            json={"company": company_name},
            timeout=3600
        )

        service_url = os.getenv('COMPANY_PROJECT_RECCOMENDER_SCRAPE_URL')
        project_recommendation_response = requests.post(
            service_url,
            json={"company": company_name},
            timeout=3600
        )
        
        scoring_data = scoring_response.json()
        project_data = project_recommendation_response.json()

        company_name_scrape = CompanyNameScrape(
            company_name=company_name,
            credibility_score=scoring_data['credibility_score'],
            referential_score=scoring_data['referential_score'],
            compliance_score=scoring_data['compliance_score'],
            credibility_reasoning=scoring_data['credibility_reasoning'],
            referential_reasoning=scoring_data['referential_reasoning'],
            compliance_reasoning=scoring_data['compliance_reasoning'],
            project_title1=project_data['title1'],
            project_description1=project_data['description1'],
            project_title2=project_data['title2'],
            project_description2=project_data['description2'],
            project_title3=project_data['title3'],
            project_description3=project_data['description3']
        )

        db.session.add(company_name_scrape)
        db.session.commit()

        return jsonify({
            'company_name_scrape': company_name_scrape.to_dict()
        }), 200
    
    return jsonify({"error": "Unauthorized"}), 403


def generate_stream(service_url, company_name):
    try:
        # Make a streaming request
        with requests.post(
            service_url,
            json={"company_traits": company_name},
            stream=True,
            timeout=3600
        ) as response:
            response.raise_for_status()
            
            # Forward the streaming response directly
            for chunk in response.iter_content(chunk_size=None):
                if chunk:
                    yield chunk
                    
    except requests.exceptions.RequestException as e:
        yield f"data: {json.dumps({'error': str(e)})}\n\n".encode()
    except Exception as e:
        yield f"data: {json.dumps({'error': 'An unexpected error occurred'})}\n\n".encode()
    finally:
        yield b"event: end\ndata: {}\n\n"

@find_company_bp.route('/term', methods=['POST'])
@jwt_required()
def find_company_by_term():
    company_name = request.json.get('company')
    if not company_name:
        return jsonify({"error": "Company name is required"}), 400
        
    service_url = os.getenv('COMPANY_SEARCH_URL') 
    
    if not service_url:
        return jsonify({"error": "Service URL not configured"}), 500

    return Response(
        generate_stream(service_url, company_name),
        mimetype='text/event-stream',
        headers={
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'X-Accel-Buffering': 'no'
        }
    )
