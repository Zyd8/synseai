from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from models import db, User, UserRole

user_bp = Blueprint('user', __name__)

@user_bp.route('/me', methods=['GET'])
@jwt_required()
def get_current_user():
    """
    Get the current authenticated user's information.
    Requires a valid JWT token in the Authorization header.
    """
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    if not user:
        return jsonify({'message': 'User not found'}), 404
    
    return jsonify({
        'id': user.id,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
        'contact_number': user.contact_number,
        'role': user.role.value,
        'position': user.position,
        'department_id': user.department_id,
        'created_at': user.created_at.isoformat() if user.created_at else None,
        'full_name': user.full_name
    }), 200

@user_bp.route('', methods=['GET'])
@jwt_required()
def get_users():
    """
    Get all users with optional role filtering.
    Only accessible by admin users.
    
    Query Parameters:
        role (str, optional): Filter users by role (user, employee, admin)
        
    Returns:
        JSON: List of users with their details
    """
    # Check if user is admin
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)
    
    if not current_user or current_user.role not in [UserRole.ADMIN, UserRole.EMPLOYEE]:
        return jsonify({'message': 'Admin or Employee access required'}), 403
    
    # Get role filter from query parameters
    role_filter = request.args.get('role')
    
    # Build query
    query = User.query
    
    # Apply role filter if provided
    if role_filter:
        try:
            role = UserRole(role_filter.lower())
            query = query.filter(User.role == role)
        except ValueError:
            return jsonify({'message': 'Invalid role. Must be one of: user, employee, admin'}), 400
    
    # Execute query and format response
    users = query.all()
    
    return jsonify([{
        'id': user.id,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
        'contact_number': user.contact_number,
        'role': user.role.value,
        'position': user.position,
        'department_id': user.department_id,
        'created_at': user.created_at.isoformat() if user.created_at else None,
        'full_name': user.full_name
    } for user in users]), 200

@user_bp.route('/<int:user_id>', methods=['GET'])
@jwt_required()
def get_user(user_id):
    """
    Get a specific user by ID.
    Only accessible by admin users.
    
    Parameters:
        user_id (int): ID of the user to retrieve
        
    Returns:
        JSON: User details with their ID, first name, last name, email, contact number, role, position, department ID, created at, and full name
    """
    # Check if user is admin
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)
    
    if not current_user or current_user.role not in [UserRole.ADMIN, UserRole.EMPLOYEE]:
        return jsonify({'message': 'Admin or Employee access required'}), 403
    
    # Get user by ID
    user = User.query.get(user_id)
    
    if not user:
        return jsonify({'message': 'User not found'}), 404
    
    return jsonify({
        'id': user.id,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
        'contact_number': user.contact_number,
        'role': user.role.value,
        'position': user.position,
        'department_id': user.department_id,
        'created_at': user.created_at.isoformat() if user.created_at else None,
        'full_name': user.full_name
    }), 200