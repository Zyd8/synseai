from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
import os

from models import db, Document

document_bp = Blueprint('document', __name__)

@document_bp.route('', methods=['POST'])
@jwt_required()
def create_document():
    try:
        name = request.form.get("name")
        if not name:
            return jsonify({"error": "Name is required"}), 400

        if "file" not in request.files:
            return jsonify({"error": "No file part"}), 400
        
        file = request.files["file"]
        if file.filename == "":
            return jsonify({"error": "No selected file"}), 400

        folder_name = "Documents_New"
        os.makedirs(folder_name, exist_ok=True)

        safe_filename = secure_filename(file.filename)
        new_filename = f"{name}_{safe_filename}"
        file_path = os.path.join(folder_name, new_filename)

        file.save(file_path)

        document = Document(
            name=name,      
            file=file_path  
        )
        db.session.add(document)
        db.session.commit()

        return jsonify({
            "message": "Document saved successfully",
            "file": document.to_dict()
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500
