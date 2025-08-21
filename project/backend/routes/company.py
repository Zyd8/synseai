from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Company, User
from routes.synergy import _create_company_synergy
import threading

def run_synergy_creation(app, company_id, company_name):
    """Helper function to run synergy creation in a background thread"""
    with app.app_context():
        success, result = _create_company_synergy(company_id, company_name)
        if not success:
            current_app.logger.error(f"Failed to create synergy: {result}")

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
            color=data.get('color'),
            user_id=current_user_id
        )
        
        db.session.add(company)
        db.session.commit()

        # Start the synergy creation in a background thread
        thread = threading.Thread(
            target=run_synergy_creation,
            args=(current_app._get_current_object(), company.id, company.name)
        )
        thread.daemon = True
        thread.start()
        
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
        if 'color' in data:
            company.color = data['color']
            
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

@company_bp.route('/<int:company_id>', methods=['GET'])
@jwt_required()
def get_company_by_id(company_id):
    """Get a company by ID"""
    current_user_id = str(get_jwt_identity())
    
    # Find the company
    company = Company.query.filter_by(id=company_id).first()
    if not company:
        return jsonify({"error": "Company not found"}), 404
    
    try:
        return jsonify({
            "company": company.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@company_bp.route('/all', methods=['GET'])
@jwt_required()
def get_all_companies():
    """Get all companies in the system"""
    try:
        companies = Company.query.all()
        return jsonify([company.to_dict() for company in companies]), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


