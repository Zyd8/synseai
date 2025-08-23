import requests
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Company, User, UserRole
import os
from dotenv import load_dotenv

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
        
        return jsonify({
            'scoring': scoring_data,
            'recommendations': project_data
        }), 200
    
    return jsonify({"error": "Unauthorized"}), 403


@find_company_bp.route('/term', methods=['POST'])
@jwt_required()
def find_company_by_term():
    """
    Find companies based on search query
    """
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)

    if not user:
        return jsonify({"error": "User not found"}), 404

    if user.role == UserRole.ADMIN or user.role == UserRole.EMPLOYEE:
        companies = Company.query.filter_by(name=request.json.get('name')).all()
        return jsonify([company.to_dict() for company in companies]), 200
    
    return jsonify({"error": "Unauthorized"}), 403
