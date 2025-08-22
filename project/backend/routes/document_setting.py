from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
from flask import send_file
from datetime import datetime
import pytz
import os

from models import db, Document_setting, Reverted_document

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

        # Convert iteration IDs -> Department names
        iteration_text = []
        if setting.iteration:
            from models import Department  # import here to avoid circular issues
            depts = Department.query.filter(Department.id.in_(setting.iteration)).all()
            dept_map = {d.id: d.name for d in depts}
            iteration_text = [dept_map.get(i, f"Unknown ({i})") for i in setting.iteration]

        result = {
            "id": setting.id,
            "current_location": setting.current_location,
            "iteration": setting.iteration,
            "iteration_text": iteration_text,  # 👈 department names
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

        tz = pytz.timezone(os.getenv('APP_TIMEZONE', 'UTC'))

        # --- HANDLE OLD FILE ---
        if document.file and os.path.exists(document.file):
            # Check if this document already has a reverted record
            reverted_doc = Reverted_document.query.filter_by(document_id=document.id).first()
            if reverted_doc:
                # If yes, delete the old reverted file
                if os.path.exists(reverted_doc.file):
                    os.remove(reverted_doc.file)
                # Update record with new path
                prev_file_path = os.path.join(previous_folder, os.path.basename(document.file))
                os.rename(document.file, prev_file_path)
                reverted_doc.file = prev_file_path
                reverted_doc.last_revert = datetime.now(tz)
            else:
                # Create new reverted record
                prev_file_path = os.path.join(previous_folder, os.path.basename(document.file))
                os.rename(document.file, prev_file_path)
                reverted_doc = Reverted_document(
                    file=prev_file_path,
                    last_revert=datetime.now(tz),
                    document_id=document.id
                )
                db.session.add(reverted_doc)

        # --- SAVE NEW FILE ---
        file.save(new_file_path)
        document.file = new_file_path

        # Update timestamp
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


@document_setting_bp.route('/push/<int:setting_id>', methods=['POST'])
@jwt_required()
def push_document_setting(setting_id):
    try:
        setting = Document_setting.query.get_or_404(setting_id)

        if setting.current_location not in setting.iteration:
            return jsonify({"error": "Current location is not in iteration list"}), 400

        current_index = setting.iteration.index(setting.current_location)
        if current_index >= len(setting.iteration) - 1:
            return jsonify({
                "message": "Already at the last iteration",
                "current_location": setting.current_location
            }), 200

        setting.current_location = setting.iteration[current_index + 1]

        db.session.commit()

        return jsonify({
            "message": "Current location updated to next iteration",
            "current_location": setting.current_location
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@document_setting_bp.route('/current/<int:location_id>', methods=['GET'])
@jwt_required()
def get_by_current_location(location_id):
    try:
        # Query all settings where current_location matches
        settings = Document_setting.query.filter_by(current_location=location_id).all()

        if not settings:
            return jsonify([]), 200  # return empty array if none found

        result = []
        for setting in settings:
            result.append({
                "id": setting.id,
                "document_name": setting.document.name if setting.document else None
            })

        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@document_setting_bp.route('/included/<int:check_id>', methods=['GET'])
@jwt_required()
def get_if_included(check_id):
    try:
        # Fetch all settings
        settings = Document_setting.query.all()

        result = []
        for setting in settings:
            if setting.iteration and check_id in setting.iteration:
                result.append({
                    "id": setting.id,
                    "document_name": setting.document.name if setting.document else None,
                })

        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500



