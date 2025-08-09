from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Company, User, Proposal

proposal_bp = Blueprint('proposal', __name__)

@proposal_bp.route('', methods=['POST'])
@jwt_required()
def create_proposal():
    """
    Create a new proposal for the authenticated user's company
    
    Required fields: title, description
    """
    current_user_id = str(get_jwt_identity())
    data = request.get_json()
    
    # Check if user has a company
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
        
    if not user.company:
        return jsonify({"error": "User does not have a company"}), 400
    
    # Validate required fields
    if not data.get('title') or not data.get('description'):
        return jsonify({"error": "Title and description are required"}), 400
    
    try:
        # Create new proposal
        proposal = Proposal(
            title=data['title'],
            description=data['description'],
            company_id=user.company.id
        )
        
        db.session.add(proposal)
        db.session.commit()
        
        return jsonify({
            "message": "Proposal created successfully",
            "proposal": proposal.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@proposal_bp.route('', methods=['GET'])
@jwt_required()
def get_proposals():
    """Get all proposals for the authenticated user's company"""
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
        
    if not user.company:
        return jsonify({"error": "User does not have a company"}), 400
    
    proposals = Proposal.query.filter_by(company_id=user.company.id).all()
    return jsonify({
        "proposals": [proposal.to_dict() for proposal in proposals]
    }), 200

@proposal_bp.route('/<int:proposal_id>', methods=['GET'])
@jwt_required()
def get_proposal(proposal_id):
    """Get a specific proposal by ID"""
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
        
    if not user.company:
        return jsonify({"error": "User does not have a company"}), 400
    
    proposal = Proposal.query.filter_by(
        id=proposal_id,
        company_id=user.company.id
    ).first()
    
    if not proposal:
        return jsonify({"error": "Proposal not found"}), 404
        
    return jsonify(proposal.to_dict()), 200


@proposal_bp.route('/<int:proposal_id>', methods=['PUT'])
@jwt_required()
def update_proposal(proposal_id):
    """
    Update a specific proposal
    
    Optional fields: title, description
    """
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
        
    if not user.company:
        return jsonify({"error": "User does not have a company"}), 400
    
    proposal = Proposal.query.filter_by(
        id=proposal_id,
        company_id=user.company.id
    ).first()
    
    if not proposal:
        return jsonify({"error": "Proposal not found"}), 404
        
    data = request.get_json()
    
    try:
        if 'title' in data:
            proposal.title = data['title']
        if 'description' in data:
            proposal.description = data['description']
            
        db.session.commit()
        
        return jsonify({
            "message": "Proposal updated successfully",
            "proposal": proposal.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@proposal_bp.route('/<int:proposal_id>', methods=['DELETE'])
@jwt_required()
def delete_proposal(proposal_id):
    """Delete a specific proposal"""
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
        
    if not user.company:
        return jsonify({"error": "User does not have a company"}), 400
    
    proposal = Proposal.query.filter_by(
        id=proposal_id,
        company_id=user.company.id
    ).first()
    
    if not proposal:
        return jsonify({"error": "Proposal not found"}), 404
        
    try:
        db.session.delete(proposal)
        db.session.commit()
        
        return jsonify({
            "message": "Proposal deleted successfully"
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
