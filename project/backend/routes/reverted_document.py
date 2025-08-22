from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
from flask import send_file, current_app
import os

from models import db, Reverted_document

reverted_document_bp = Blueprint('reverted_document', __name__)

@reverted_document_bp.route('', methods=['POST'])
@jwt_required()
def create_reverted_document():
    pass