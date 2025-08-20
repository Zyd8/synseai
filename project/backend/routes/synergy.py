from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Synergy
import requests

synergy_bp = Blueprint('synergy', __name__)

def _create_company_synergy(company_id, company_name):
    """Core function to create company synergy without JWT requirements"""
    try:
        service_url = "http://localhost:5001/scrape"
        response = requests.post(
            service_url,
            json={"company": company_name},
            timeout=3600
        )

        data = response.json()['data']
        
        synergy = Synergy(
            company_id=company_id,
            credibility_score=data['credibility_score'],
            referential_score=data['referential_score'],
            credibility_reasonings=data['credibility_reasoning'],
            referential_reasonings=data['referential_reasoning']
        )
        
        db.session.add(synergy)
        db.session.commit()
        return True, synergy
        
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Error creating synergy: {str(e)}")
        return False, str(e)

@synergy_bp.route('company', methods=['POST'])
@jwt_required()
def create_company_synergy():
    """HTTP endpoint for creating company synergy"""
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    
    if not user:
        return jsonify({"error": "User not found"}), 404
    if not user.company:
        return jsonify({"error": "User does not have a company"}), 400
    if user.company.synergy:
        return jsonify({"error": "Synergy already exists for this company"}), 400

    success, result = _create_company_synergy(user.company.id, user.company.name)
    
    if success:
        return jsonify({
            "message": "Synergy created successfully",
            "synergy": result.to_dict()
        }), 201
    return jsonify({"error": result}), 500