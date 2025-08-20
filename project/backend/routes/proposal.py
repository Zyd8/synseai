from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Proposal, UserRole, ProposalStatus, Company

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
            collab_type=data.get('collab_type'),
            company_id=user.company.id,
            status=ProposalStatus.SUBMITTED
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


@proposal_bp.route('/all', methods=['GET'])
@jwt_required()
def get_all_proposals():
    """
    Get all proposals across all companies (Employee only)
    
    Returns:
        A list of all proposals with company information
    """
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    
    if not user or user.role != UserRole.EMPLOYEE:
        return jsonify({"error": "Employee access required"}), 403
    
    # Get all proposals with company information
    proposals = db.session.query(
        Proposal,
        Company.name.label('company_name'),
        Company.industry.label('company_industry')
    ).join(
        Company, Proposal.company_id == Company.id
    ).order_by(Proposal.created_at.desc()).all()
    
    # Format the response
    result = []
    for proposal, company_name, company_industry in proposals:
        proposal_data = proposal.to_dict()
        proposal_data['company_name'] = company_name
        proposal_data['company_industry'] = company_industry
        result.append(proposal_data)
    
    return jsonify({
        "proposals": result,
        "count": len(result)
    }), 200

@proposal_bp.route('/<int:proposal_id>', methods=['GET'])
@jwt_required()
def get_proposal(proposal_id):
    """Get a specific proposal by ID"""
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    if not user.company and user.role == UserRole.USER:
        return jsonify({"error": "User does not have a company"}), 400

    if user.role == UserRole.EMPLOYEE or user.role == UserRole.ADMIN:
        proposal_data = db.session.query(
            Proposal,
            Company.name.label('company_name'),
            Company.industry.label('company_industry')
        ).join(
            Company, Proposal.company_id == Company.id
        ).filter(Proposal.id == proposal_id).first()
        
        if not proposal_data:
            return jsonify({"error": "Proposal not found"}), 404
        
        proposal, company_name, company_industry = proposal_data
        result = proposal.to_dict()
        result['company_name'] = company_name
        result['company_industry'] = company_industry
        
        return jsonify(result), 200

    elif user.role == UserRole.USER:
        proposal = Proposal.query.filter_by(
            id=proposal_id,
            company_id=user.company.id
        ).first()
        
        if not proposal:
            return jsonify({"error": "Proposal not found"}), 404
        
        return jsonify(proposal.to_dict()), 200

    return jsonify({"error": "Unauthorized: Employee or User role required"}), 403


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
        if 'collab_type' in data:
            proposal.collab_type = data['collab_type']
            
        db.session.commit()
        
        return jsonify({
            "message": "Proposal updated successfully",
            "proposal": proposal.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@proposal_bp.route('/<int:proposal_id>/status', methods=['PATCH'])
@jwt_required()
def update_proposal_status(proposal_id):
    """
    Update proposal status (Employee only)
    
    Required fields: status (must be one of: 'Ongoing', 'Rejected', 'Approved', 'Submitted')
    """
    current_user_id = str(get_jwt_identity())
    data = request.get_json()
    
    # Check if user has employee role
    user = User.query.get(current_user_id)
    if not user or user.role != UserRole.EMPLOYEE:
        return jsonify({"error": "Unauthorized: Employee role required"}), 403
    
    # Validate required fields
    status = data.get('status')
    if not status or status.upper() not in ['ONGOING', 'REJECTED', 'APPROVED', 'SUBMITTED']:
        return jsonify({
            "error": "Status is required and must be one of: 'Ongoing', 'Rejected', 'Approved', 'Submitted'"
        }), 400
    
    # Find the proposal
    proposal = Proposal.query.get(proposal_id)
    if not proposal:
        return jsonify({"error": "Proposal not found"}), 404
    
    try:
        # Update status using the enum
        proposal.status = ProposalStatus[status.upper()]
        db.session.commit()
        
        return jsonify({
            "message": "Proposal status updated successfully",
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
