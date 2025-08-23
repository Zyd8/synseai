from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Synergy, Company, UserRole
import requests
from dotenv import load_dotenv
import os

load_dotenv()

synergy_bp = Blueprint('synergy', __name__)

def _create_company_synergy(company_id, company_name):
    """Core function to create company synergy without JWT requirements"""
    try:
        service_url = os.getenv('COMPANY_SCORING_SCRAPE_URL')
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
            referential_reasonings=data['referential_reasoning'],
            compliance_score=data['compliance_score'],
            compliance_reasonings=data['compliance_reasoning']
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

def _update_company_synergy(company_id, company_name):
    """Core function to update company synergy without JWT requirements"""
    try:
        service_url = os.getenv('COMPANY_SCORING_SCRAPE_URL')
        response = requests.post(
            service_url,
            json={"company": company_name},
            timeout=3600
        )

        data = response.json()['data']
        
        synergy = Synergy.query.filter_by(company_id=company_id).first()
        if not synergy:
            return jsonify({"error": "Synergy does not exist for this company yet"}), 400
        
        synergy.credibility_score = data['credibility_score']
        synergy.referential_score = data['referential_score']
        synergy.credibility_reasonings = data['credibility_reasoning']
        synergy.referential_reasonings = data['referential_reasoning']
        synergy.compliance_score = data['compliance_score']
        synergy.compliance_reasonings = data['compliance_reasoning']
        
        db.session.commit()
        return True, synergy
        
    except Exception as e:
        db.session.rollback()
        return False, str(e)

@synergy_bp.route('company/<int:company_id>', methods=['PUT'])
@jwt_required()
def update_company_synergy(company_id):
    """HTTP endpoint for updating company synergy with partial updates"""
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)

    print(user.role)
    
    # Check user permissions
    if user.role not in [UserRole.ADMIN, UserRole.EMPLOYEE]:
        return jsonify({"error": "Insufficient permissions"}), 403
        
    # Get the target company
    company = Company.query.get(company_id)
    if not company:
        return jsonify({"error": "Company not found"}), 404
        
    if not company.synergy:
        return jsonify({"error": "Synergy does not exist for this company"}), 404

    success, result = _update_company_synergy(company_id, company.name)
    
    if not success:
        return jsonify({"error": str(result)}), 500

    try:
        return jsonify({
            "message": "Synergy updated successfully",
            "synergy": result.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Error updating synergy: {str(e)}")
        return jsonify({"error": "Failed to update synergy"}), 500

@synergy_bp.route('company/<int:company_id>', methods=['GET'])
@jwt_required()
def get_company_synergy(company_id):
    """HTTP endpoint for getting company synergy"""
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    
    if user.role == UserRole.ADMIN or user.role == UserRole.EMPLOYEE:
        company = Company.query.filter_by(id=company_id).first()
        if not company:
            return jsonify({"error": "Company not found"}), 404
        if not company.synergy:
            return jsonify({"error": "Synergy does not exist for this company yet"}), 400
        return jsonify(company.synergy.to_dict()), 200

    return jsonify({"error": "Unauthorized"}), 403

@synergy_bp.route('company', methods=['GET'])
@jwt_required()
def get_companies_synergy():
    """HTTP endpoint for getting companies synergy"""
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)

    if user.role == UserRole.ADMIN or user.role == UserRole.EMPLOYEE:
        companies = Company.query.all()
        return jsonify([company.synergy.to_dict() for company in companies]), 200

    return jsonify({"error": "Unauthorized"}), 403