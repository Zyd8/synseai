from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Department, UserRole

department_bp = Blueprint('department', __name__)

@department_bp.route('', methods=['POST'])
@jwt_required()
def create_department():
    try:
       
        current_user_id = str(get_jwt_identity())
        user = User.query.get(current_user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404
    
        if not user.role == UserRole.ADMIN:
            return jsonify({"error": "User is not an admin"}), 403
        
        # Create new department
        department = Department(
            name=request.json['name']
        )

        db.session.add(department)
        db.session.commit()
        
        return jsonify({
            "message": "Department created successfully",
            "department": department.to_dict()
        }), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@department_bp.route('/<int:department_id>', methods=['GET'])
@jwt_required()
def get_department(department_id):
    """Get a specific department by ID"""
    department = Department.query.get(department_id)
    if not department:
        return jsonify({"error": "Department not found"}), 404
    return jsonify(department.to_dict()), 200

@department_bp.route('', methods=['GET'])
@jwt_required()
def get_departments():
    """Get all departments"""
    departments = Department.query.all()
    return jsonify({
        "departments": [department.to_dict() for department in departments]
    }), 200

@department_bp.route('/<int:department_id>', methods=['PUT'])
@jwt_required()
def update_department(department_id):
    """
    Update a specific department
    
    Optional fields: name
    """

    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    if not user.role == UserRole.ADMIN:
            return jsonify({"error": "User is not an admin"}), 403

    department = Department.query.get(department_id)
    if not department:
        return jsonify({"error": "Department not found"}), 404
    
    data = request.get_json()
    
    try:
        if 'name' in data:
            department.name = data['name']
            
        db.session.commit()
        
        return jsonify({
            "message": "Department updated successfully",
            "department": department.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@department_bp.route('/<int:department_id>', methods=['DELETE'])
@jwt_required()
def delete_department(department_id):
    """Delete a specific department"""

    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    if not user.role == UserRole.ADMIN:
            return jsonify({"error": "User is not an admin"}), 403
    
    department = Department.query.get(department_id)
    if not department:
        return jsonify({"error": "Department not found"}), 404
    
    try:
        db.session.delete(department)
        db.session.commit()
        
        return jsonify({
            "message": "Department deleted successfully"
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@department_bp.route('/<int:department_id>/users/<int:user_id>', methods=['PUT'])
@jwt_required()
def update_user_department(department_id, user_id):
    """
    Update a user's department assignment
    Only accessible by admin
    """
    try:
    
        current_user_id = str(get_jwt_identity())
        current_user = User.query.get(current_user_id)
        
        if not current_user or current_user.role != UserRole.ADMIN:
            return jsonify({"error": "Only admin can assign users to departments"}), 403
        
        department = Department.query.get(department_id)
        if not department:
            return jsonify({"error": "Department not found"}), 404
        
        user = User.query.get(user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404
        
        previous_department_id = user.department_id
        user.department_id = department_id
        
        db.session.commit()
        
        return jsonify({
            "message": "User's department updated successfully",
            "user_id": user_id,
            "previous_department_id": previous_department_id,
            "new_department_id": department_id
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
