from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
import os

from models import db, Document

document_bp = Blueprint('document', __name__)

@document_bp.route('/upload_file', methods=['POST'])
@jwt_required()
def create_document():
    try:
        name = request.form.get("name")
        if not name:
            return jsonify({"error": "Name is required"}), 400

        file_type = request.form.get("type")
        if not file_type:
            return jsonify({"error": "File Type is required"}), 400

        if "file" not in request.files:
            return jsonify({"error": "No file part"}), 400
        
        file = request.files["file"]
        if file.filename == "":
            return jsonify({"error": "No selected file"}), 400

        base_folder = "uploaded_files"

        if file_type.lower() == "team":
            sub_folder = "team_files"
        elif file_type.lower() == "proposal":
            sub_folder = "proposal_files"
        else:
            sub_folder = "others"

        folder_name = os.path.join(base_folder, sub_folder)
        os.makedirs(folder_name, exist_ok=True)

        document = Document(name=name, type=file_type, file="")
        db.session.add(document)
        db.session.commit()  

        safe_filename = secure_filename(file.filename)
        new_filename = f"{document.id}_{safe_filename}" 
        file_path = os.path.join(folder_name, new_filename)

        file.save(file_path)

        document.file = file_path
        db.session.commit()

        return jsonify({
            "message": f"Document saved successfully in {folder_name}",
            "file": document.to_dict()
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@document_bp.route('/get_file/<int:doc_id>', methods=['GET'])
@jwt_required()
def get_file(doc_id):
    try:
        document = Document.query.get_or_404(doc_id)

        return jsonify({
            "id": document.id,
            "name": document.name,
            "file_url": document.file,
            "type": document.type,
            "dowload_url": f"/api/document/download_file/{document.id}",
            "view_url": f"/api/document/view_file/{document.id}"
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

from flask import send_file
import os

@document_bp.route('/download_file/<int:doc_id>', methods=['GET'])
@jwt_required()
def download_file(doc_id):
    try:
        document = Document.query.get_or_404(doc_id)
        file_path = document.file  # e.g. uploaded_files\\team_files\\5_Sheens_Resume.pdf

        if not os.path.exists(file_path):
            return jsonify({"error": "File not found"}), 404

        return send_file(
            file_path,
            as_attachment=True,
            download_name=document.name  # what the user sees when saving
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@document_bp.route('/view_file/<int:doc_id>', methods=['GET'])
@jwt_required()
def view_file(doc_id):
    try:
        document = Document.query.get_or_404(doc_id)
        file_path = document.file

        if not os.path.exists(file_path):
            return jsonify({"error": "File not found"}), 404

        # Don’t force download, just return so browser can render PDF/image/etc.
        return send_file(file_path)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


