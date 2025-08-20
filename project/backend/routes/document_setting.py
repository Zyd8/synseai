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
    pass