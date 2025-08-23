import requests
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Company, User, UserRole

find_company_bp = Blueprint('find_company', __name__)

@find_company_bp.route('/name', methods=['POST'])
@jwt_required()
def find_company_by_name():
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

