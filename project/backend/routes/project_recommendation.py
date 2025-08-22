from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, ProjectRecommendation
from datetime import datetime
import pytz
from functools import wraps

bp = Blueprint('project_recommendation', __name__, url_prefix='/api/project-recommendations')

@bp.route('', methods=['POST'])
@jwt_required()
def create_project_recommendation():
    """Create a new project recommendation."""
    data = request.get_json()
    
    if not data:
        return jsonify({'error': 'No input data provided'}), 400
    
    # Validate required fields
    if not data.get('title') or not data.get('description'):
        return jsonify({'error': 'Title and description are required'}), 400
    
    try:
        current_user_id = get_jwt_identity()
        
        # Create new project recommendation
        project_rec = ProjectRecommendation(
            title=data['title'],
            description=data['description'],
            user_id=current_user_id
        )
        
        db.session.add(project_rec)
        db.session.commit()
        
        return jsonify(project_rec.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@bp.route('', methods=['GET'])
@jwt_required()
def get_project_recommendations():
    """Get all project recommendations for the current user."""
    try:
        current_user_id = get_jwt_identity()
        
        # Get all project recommendations for the current user
        project_recs = ProjectRecommendation.query.filter_by(user_id=current_user_id).all()
        
        return jsonify([rec.to_dict() for rec in project_recs])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/<int:project_id>', methods=['GET'])
@jwt_required()
def get_project_recommendation(project_id):
    """Get a specific project recommendation by ID."""
    try:
        current_user_id = get_jwt_identity()
        
        # Find the project recommendation
        project_rec = ProjectRecommendation.query.filter_by(
            id=project_id, 
            user_id=current_user_id
        ).first()
        
        if not project_rec:
            return jsonify({'error': 'Project recommendation not found'}), 404
            
        return jsonify(project_rec.to_dict())
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
            user_id=current_user_id
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
        current_user_id = get_jwt_identity()
        
        # Find the project recommendation
        project_rec = ProjectRecommendation.query.filter_by(
            id=project_id, 
            user_id=current_user_id
        ).first()
        
        if not project_rec:
            return jsonify({'error': 'Project recommendation not found'}), 404
        
        db.session.delete(project_rec)
        db.session.commit()
        
        return jsonify({'message': 'Project recommendation deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
