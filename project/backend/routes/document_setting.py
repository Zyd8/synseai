from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
from flask import send_file
from datetime import datetime
import pytz
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

@document_setting_bp.route('/update/<int:setting_id>', methods=['POST'])
@jwt_required()
def update_document_setting(setting_id):
    try:
        setting = Document_setting.query.get_or_404(setting_id)
        document = setting.document
        if not document:
            return jsonify({"error": "Associated document not found"}), 404

        if "file" not in request.files:
            return jsonify({"error": "No file part"}), 400

        file = request.files["file"]
        if file.filename == "":
            return jsonify({"error": "No selected file"}), 400

        base_folder = "uploaded_files"
        if document.type.lower() == "team":
            sub_folder = "team_files"
        elif document.type.lower() == "proposal":
            sub_folder = "proposal_files"
        else:
            sub_folder = "others"

        folder_name = os.path.join(base_folder, sub_folder)
        previous_folder = os.path.join("previous_files", sub_folder)
        os.makedirs(folder_name, exist_ok=True)
        os.makedirs(previous_folder, exist_ok=True)

        safe_filename = secure_filename(file.filename)
        new_filename = f"{document.id}_{safe_filename}"
        new_file_path = os.path.join(folder_name, new_filename)

        if document.file and os.path.exists(document.file):
            prev_file_path = os.path.join(previous_folder, os.path.basename(document.file))
            if os.path.exists(prev_file_path):
                os.remove(prev_file_path)
            os.rename(document.file, prev_file_path)

        file.save(new_file_path)

        document.file = new_file_path

        tz = pytz.timezone(os.getenv('APP_TIMEZONE', 'UTC'))
        setting.updated_at = datetime.now(tz)

        db.session.commit()

        return jsonify({
            "message": "Document setting and file updated successfully",
            "document": document.to_dict(),
            "id": setting.id,
            "updated_at": setting.updated_at
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
