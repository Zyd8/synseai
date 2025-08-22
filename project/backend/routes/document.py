from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
from flask import send_file, current_app
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
        
        description = request.form.get("description")
        # if not description:
        #     return jsonify({"error": "Descr is required"}), 400

        proposal_id = request.form.get("proposal_id")
        if proposal_id in ["", "null", "None", None]:
            proposal_id = None

        is_bpi_str = request.form.get("is_bpi")
        if is_bpi_str is None:
            return jsonify({"error": "Insert If BPI or NOT is required"}), 400

        if is_bpi_str.lower() in ["true", "1", "yes"]:
            is_bpi = True
        elif is_bpi_str.lower() in ["false", "0", "no"]:
            is_bpi = False
        else:
            return jsonify({"error": "Invalid value for is_bpi, must be true/false or 1/0"}), 400


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

        document = Document(name=name, type=file_type, file="", description=description, is_bpi=is_bpi, proposal_id=proposal_id)
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

@document_bp.route('/get_proposal_files/<int:proposal_id>', methods=['GET'])
@jwt_required()
def get_files_by_proposal(proposal_id):
    try:
        # Query all documents with this proposal_id
        documents = Document.query.filter_by(proposal_id=proposal_id).all()

        if not documents:
            return jsonify({"message": "No documents found for this proposal"}), 404

        # Map documents into a list of dicts
        result = []
        for doc in documents:
            result.append({
                "id": doc.id,
                "name": doc.name,
                "file_url": doc.file,
                "type": doc.type,
                "description": doc.description,
                "is_bpi": doc.is_bpi,
                "proposal_id": doc.proposal_id,
                "created_at": doc.created_at,
                "download_url": f"/api/document/download_file/{doc.id}",
                "view_url": f"/api/document/view_file/{doc.id}"
            })

        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@document_bp.route('/download_file/<int:doc_id>', methods=['GET'])
def download_file2(doc_id):
    try:
        document = Document.query.get_or_404(doc_id)
        file_path = os.path.join(current_app.root_path, document.file)  

        if not os.path.exists(file_path):
            return jsonify({"error": "File not found"}), 404

        return send_file(
            file_path,
            as_attachment=True,
            download_name=os.path.basename(file_path)
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

        return send_file(file_path)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@document_bp.route('/get_all', methods=['GET'])
@jwt_required()
def get_all_documents():
    try:
        documents = Document.query.all()

        if not documents:
            return jsonify({"message": "No documents found"}), 404

        result = []
        for doc in documents:
            result.append({
                "id": doc.id,
                "name": doc.name,
                "file_url": doc.file,
                "type": doc.type,
                "description": doc.description,
                "is_bpi": doc.is_bpi,
                "is_assigned": doc.is_assigned,
                "proposal_id": doc.proposal_id,
                "created_at": doc.created_at,
                "download_url": f"/api/document/download_file/{doc.id}",
                "view_url": f"/api/document/view_file/{doc.id}"
            })

        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@document_bp.route('/get_unassigned', methods=['GET'])
@jwt_required()
def get_unassigned_documents():
    try:
        # Query all unassigned documents
        documents = Document.query.filter_by(is_assigned=False).all()

        if not documents:
            return jsonify({"message": "No unassigned documents found"}), 404

        # Only return id, name, file
        result = [
            {
                "id": doc.id,
                "name": doc.name,
                "file": doc.file
            }
            for doc in documents
        ]

        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

