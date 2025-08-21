from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
from flask import send_file
import os

from models import db, Document_setting

document_setting_bp = Blueprint('document_setting', __name__)

@document_setting_bp.route('/upload_document_setting', methods=['POST'])
@jwt_required()
def create_document_setting(): 
    try:
        data = request.get_json()

        iteration = data.get("iteration")
        document_id = data.get("document_id")

        if not document_id:
            return jsonify({"error": "document_id is required"}), 400
        if not iteration or not isinstance(iteration, list):
            return jsonify({"error": "iteration must be a list of numbers"}), 400
        if not all(isinstance(i, int) for i in iteration):
            return jsonify({"error": "all iteration values must be integers"}), 400

        current_location = iteration[0]

        new_setting = Document_setting(
            current_location=current_location,
            iteration=iteration,
            document_id=document_id
        )
        db.session.add(new_setting)
        db.session.commit()

        return jsonify(new_setting.to_dict()), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500



@document_setting_bp.route('/get_all', methods=['GET'])
@jwt_required()
def get_all():
    try:
        settings = Document_setting.query.all()

        results = []
        for setting in settings:
            results.append({
                "id": setting.id,
                "document_id": setting.document_id,
                "document_name": setting.document.name if setting.document else None
            })

        return jsonify(results), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@document_setting_bp.route('/<int:setting_id>', methods=['GET'])
@jwt_required()
def get_by_id(setting_id):
    try:
        setting = Document_setting.query.get(setting_id)
        if not setting:
            return jsonify({"error": "Document setting not found"}), 404

        doc = setting.document
        result = {
            "id": setting.id,
            "current_location": setting.current_location,
            "iteration": setting.iteration,
            "updated_at": setting.updated_at,
            "document_id": setting.document_id,
            "document_name": doc.name if doc else None,
            "document_created_at": doc.created_at if doc else None,
            "document_description": doc.description if doc else None,
            "download_url": f"/api/document/download_file/{doc.id}" if doc else None
        }

        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


