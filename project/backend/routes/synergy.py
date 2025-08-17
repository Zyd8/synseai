from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Synergy
import requests

synergy_bp = Blueprint('synergy', __name__)

@synergy_bp.route('company', methods=['POST'])
@jwt_required()
def create_company_synergy():

    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    if not user.company:
        return jsonify({"error": "User does not have a company"}), 400

    if user.company.synergy:
        return jsonify({"error": "Synergy already exists for this company"}), 400

    service_url = "http://localhost:5001/scrape"  # Adjust the port if different
    response = requests.post(
        service_url,
        json={"company": user.company.name},
        timeout=3600  # Increase timeout as scraping might take time
    )

    data = response.json()['data']
    
    try:
        # Create new synergy
        synergy = Synergy(
            company_id=user.company.id,
            credibility_score=data['credibility_score'],
            referential_score=data['referential_score'],
            credibility_reasonings=data['credibility_reasoning'],
            referential_reasonings=data['referential_reasoning']
        )
        
        db.session.add(synergy)
        db.session.commit()
        
        return jsonify({
            "message": "Synergy created successfully",
            "synergy": synergy.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500