from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Company, User

company_bp = Blueprint('company', __name__)

@company_bp.route('', methods=['POST'])
@jwt_required()
def create_company():
    """
    Create a new company for the authenticated user
    
    Required fields: name, contact_email
    Optional fields: address, logo (base64), bio
    """
    current_user_id = str(get_jwt_identity())
    data = request.get_json()
    
    # Check if user already has a company
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
        
    if user.company:
        return jsonify({"error": "User already has a company"}), 400
    
    # Validate required fields
    if not data.get('name') or not data.get('contact_email'):
        return jsonify({"error": "Name and contact email are required"}), 400
    
    try:
        # Create new company
        company = Company(
            name=data['name'],
            contact_email=data['contact_email'],
            website=data.get('website'),
            address=data.get('address'),
            logo=data.get('logo'),  # base64 string
            bio=data.get('bio'),
            industry=data.get('industry'),
            size=data.get('size'),
            user_id=current_user_id
        )
        
        db.session.add(company)
        db.session.commit()
        
        return jsonify({
            "message": "Company created successfully",
            "company": company.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@company_bp.route('', methods=['GET'])
@jwt_required()
def get_company():
    """Get the authenticated user's company details"""
    current_user_id = str(get_jwt_identity())
    company = Company.query.filter_by(user_id=current_user_id).first()
    if not company:
        return jsonify({"error": "Company not found"}), 404
        
    return jsonify(company.to_dict())

@company_bp.route('', methods=['PUT'])
@jwt_required()
def update_company():
    """
    Update the authenticated user's company details
    
    All fields are optional
    """
    current_user_id = str(get_jwt_identity())
    data = request.get_json()
    
    company = Company.query.filter_by(user_id=current_user_id).first()
    if not company:
        return jsonify({"error": "Company not found"}), 404
    
    try:
        # Update fields if they exist in the request
        if 'name' in data:
            company.name = data['name']
        if 'contact_email' in data:
            company.contact_email = data['contact_email']
        if 'website' in data:
            company.website = data['website']
        if 'address' in data:
            company.address = data['address']
        if 'logo' in data:
            company.logo = data['logo']
        if 'bio' in data:
            company.bio = data['bio']
        if 'industry' in data:
            company.industry = data['industry']
        if 'size' in data:
            company.size = data['size']
            
        db.session.commit()
        
        return jsonify({
            "message": "Company updated successfully",
            "company": company.to_dict()
        })
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@company_bp.route('', methods=['DELETE'])
@jwt_required()
def delete_company():
    """Delete the authenticated user's company"""
    current_user_id = str(get_jwt_identity())
    
    # Find the company
    company = Company.query.filter_by(user_id=current_user_id).first()
    if not company:
        return jsonify({"error": "Company not found"}), 404
    
    try:
        # Delete the company
        db.session.delete(company)
        db.session.commit()
        
        return jsonify({
            "message": "Company deleted successfully"
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500