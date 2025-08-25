from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, ProjectRecommendation
from datetime import datetime
import pytz
import requests
import os
from dotenv import load_dotenv
from service.main import company_project_reccomender

load_dotenv()

bp = Blueprint('project_recommendation', __name__)

def _create_company_project_recommendation(company_id, company_name):
    """Core function to create company project recommendation without JWT requirements"""
    try:
        # Get project recommendations
        response_data = company_project_reccomender(company_name)
        
        # Check for error response
        if 'error' in response_data:
            return False, response_data['error']
            
        # Initialize SynseaiLLM to generate project recommendations
        from service.synseai_llm import SynseaiLLM
        llm = SynseaiLLM(company_name)
        
        # Generate project recommendations using the LLM
        recommendations = llm.project_recommendation(response_data)
        
        # Format the response to match the expected structure
        project_data = {
            'title1': recommendations[0][0] if len(recommendations) > 0 else 'No recommendation',
            'description1': recommendations[0][1] if len(recommendations) > 0 else 'No description',
            'title2': recommendations[1][0] if len(recommendations) > 1 else 'No recommendation',
            'description2': recommendations[1][1] if len(recommendations) > 1 else 'No description',
            'title3': recommendations[2][0] if len(recommendations) > 2 else 'No recommendation',
            'description3': recommendations[2][1] if len(recommendations) > 2 else 'No description',
            'company_id': company_id
        }
            
        # Create the project recommendation
        project_recommendation = ProjectRecommendation(**project_data)
        
        db.session.add(project_recommendation)
        db.session.commit()
        return True, project_recommendation
        
    except Exception as e:
        db.session.rollback()
        return False, str(e)

@bp.route('', methods=['POST'])
@jwt_required()
def create_project_recommendation():
    """Create a new project recommendation."""

    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
    
        if not user:
            return jsonify({'error': 'User not found'}), 404
        if not user.company:
            return jsonify({'error': 'User does not have a company'}), 400
    
        success, result = _create_company_project_recommendation(user.company.id, user.company.name)
    
        if success:
            return jsonify({
                "message": "Project recommendation created successfully",
                "project_recommendation": result.to_dict()
            }), 201
        return jsonify({"error": result}), 500

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@bp.route('', methods=['GET'])
@jwt_required()
def get_project_recommendations():
    """Get all project recommendations for the current user."""
    try:
        
        # Get all project recommendations for the current user
        project_recs = ProjectRecommendation.query.all()
        
        return jsonify([rec.to_dict() for rec in project_recs])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/<int:project_id>', methods=['GET'])
@jwt_required()
def get_project_recommendation(project_id):
    """Get a specific project recommendation by ID."""
    try:
        
        # Find the project recommendation
        project_rec = ProjectRecommendation.query.filter_by(
            id=project_id, 
        ).first()
        
        if not project_rec:
            return jsonify({'error': 'Project recommendation not found'}), 404
            
        return jsonify(project_rec.to_dict())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('company/<int:company_id>', methods=['GET'])
@jwt_required()
def get_project_recommendations_by_company(company_id):
    """Get all project recommendations for a specific company."""
    try:
        
        # Get all project recommendations for the current user
        project_recs = ProjectRecommendation.query.filter_by(
            company_id=company_id, 
        ).all()
        
        return jsonify([rec.to_dict() for rec in project_recs])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/<int:project_id>', methods=['PUT'])
@jwt_required()
def update_project_recommendation(project_id):
    """Update a project recommendation."""
    try:
        current_user_id = get_jwt_identity()
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No input data provided'}), 400
            
        # Find the project recommendation
        project_rec = ProjectRecommendation.query.filter_by(
            id=project_id, 
        ).first()
        
        if not project_rec:
            return jsonify({'error': 'Project recommendation not found'}), 404
        
        # Update fields if provided
        if 'title' in data:
            project_rec.title = data['title']
        if 'description' in data:
            project_rec.description = data['description']
        
        project_rec.updated_at = datetime.now(pytz.timezone('UTC'))
        db.session.commit()
        
        return jsonify(project_rec.to_dict())
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@bp.route('/<int:project_id>', methods=['DELETE'])
@jwt_required()
def delete_project_recommendation(project_id):
    """Delete a project recommendation."""
    try:
        
        # Find the project recommendation
        project_rec = ProjectRecommendation.query.filter_by(
            id=project_id, 
        ).first()
        
        if not project_rec:
            return jsonify({'error': 'Project recommendation not found'}), 404
        
        db.session.delete(project_rec)
        db.session.commit()
        
        return jsonify({'message': 'Project recommendation deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
