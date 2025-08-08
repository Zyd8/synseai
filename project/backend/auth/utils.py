from functools import wraps
from flask import jsonify, request
from flask_jwt_extended import verify_jwt_in_request, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def hash_password(password):
    """Hash a password for storing."""
    return generate_password_hash(password)

def verify_password(stored_password, provided_password):
    """Verify a stored password against one provided by user."""
    return check_password_hash(stored_password, provided_password)

def create_access_token(user_id, expires_delta=None):
    """Create a JWT access token."""
    if expires_delta:
        expire = datetime.datetime.now(datetime.timezone.utc) + expires_delta
    else:
        expire = datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=1)
    
    token = jwt.encode(
        {
            'user_id': user_id,
            'exp': expire,
            'iat': datetime.datetime.now(datetime.timezone.utc),
            'type': 'access'
        },
        os.getenv('SECRET_KEY'),
        algorithm='HS256'
    )
    return token

def token_required(f):
    """Decorator to protect routes that require authentication."""
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            try:
                token = auth_header.split(" ")[1]
            except IndexError:
                return jsonify({'message': 'Bearer token malformed.'}), 401
        
        if not token:
            return jsonify({'message': 'Token is missing.'}), 401
        
        try:
            data = jwt.decode(token, os.getenv('SECRET_KEY'), algorithms=["HS256"])
            current_user_id = data['user_id']
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token has expired.'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Token is invalid.'}), 401
        
        return f(current_user_id, *args, **kwargs)
    
    return decorated
