from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Document

document_bp = Blueprint('document', __name__)

@document_bp.route('', methods=['POST'])
@jwt_required()
def create_document():
    try:
       
        current_user_id = str(get_jwt_identity())
        user = User.query.get(current_user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404
    
        if not user.is_admin:
            return jsonify({"error": "User is not an admin"}), 403
        
        # Create new department
        department = Department(
            name=request.json['name']
        )

        db.session.add(department)
        db.session.commit()
        
        return jsonify({
            "message": "Document saved successfully",
            "department": department.to_dict()
        }), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500