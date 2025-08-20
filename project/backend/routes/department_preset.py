from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, DepartmentPreset, UserRole

department_preset_bp = Blueprint('department_preset', __name__)

@department_preset_bp.route('', methods=['POST'])
@jwt_required()
def create_department_preset():
    try:
        current_user_id = str(get_jwt_identity())
        user = User.query.get(current_user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404
    
        if not user.role == UserRole.ADMIN:
            return jsonify({"error": "User is not an admin"}), 403
    
        # Create new department preset
        department_preset = DepartmentPreset(
            name=request.json['name'],
            department_queues=request.json['department_queues']
        )
    
        db.session.add(department_preset)
        db.session.commit()
    
        return jsonify({
            "message": "Department preset created successfully",
            "department_preset": department_preset.to_dict()
        }), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@department_preset_bp.route('/<int:department_preset_id>', methods=['GET'])
@jwt_required()
def get_department_preset(department_preset_id):
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    if not user.role == UserRole.ADMIN:
        return jsonify({"error": "User is not an admin"}), 403
    try:
        department_preset = DepartmentPreset.query.get(department_preset_id)
        if not department_preset:
            return jsonify({"error": "Department preset not found"}), 404
    
        return jsonify({
            "department_preset": department_preset.to_dict()
        }), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@department_preset_bp.route('', methods=['GET'])
@jwt_required()
def get_department_presets():
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    if not user.role == UserRole.ADMIN:
        return jsonify({"error": "User is not an admin"}), 403
    try:
        department_presets = DepartmentPreset.query.all()
        return jsonify({
            "department_presets": [department_preset.to_dict() for department_preset in department_presets]
        }), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@department_preset_bp.route('/<int:department_preset_id>', methods=['PUT'])
@jwt_required()
def update_department_preset(department_preset_id):
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    if not user.role == UserRole.ADMIN:
        return jsonify({"error": "User is not an admin"}), 403

    try:
        department_preset = DepartmentPreset.query.get(department_preset_id)
        if not department_preset:
            return jsonify({"error": "Department preset not found"}), 404

        data = request.get_json()
        
        try:
            if 'name' in data:
                department_preset.name = data['name']
                
            db.session.commit()
            
            return jsonify({
                "message": "Department preset updated successfully",
                "department_preset": department_preset.to_dict()
            }), 200
            
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 500
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@department_preset_bp.route('/<int:department_preset_id>', methods=['DELETE'])
@jwt_required()
def delete_department_preset(department_preset_id):
    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    if not user.role == UserRole.ADMIN:
        return jsonify({"error": "User is not an admin"}), 403
    try:
        department_preset = DepartmentPreset.query.get(department_preset_id)
        if not department_preset:
            return jsonify({"error": "Department preset not found"}), 404
    
        try:
            db.session.delete(department_preset)
            db.session.commit()
            
            return jsonify({
                "message": "Department preset deleted successfully"
            }), 200
            
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 500
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
