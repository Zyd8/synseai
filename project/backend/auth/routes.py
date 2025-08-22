from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import timedelta
from models import db, User, UserRole

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    """Register a new user."""
    data = request.get_json()
    
    # Check if user already exists
    if User.query.filter_by(email=data.get('email')).first():
        return jsonify({'message': 'Email already registered'}), 400
    
    try:
        # Default to 'user' role if not specified
        role = data.get('role', 'user')
        try:
            role_enum = UserRole(role.lower())
        except ValueError:
            return jsonify({'message': 'Invalid role. Must be one of: user, employee, admin'}), 400
            
        user = User(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            contact_number=data.get('contact_number'),
            password=data['password'],  # Will be hashed in the model
            position=data.get('position', ''),
            role=role_enum
        )
        
        db.session.add(user)
        db.session.commit()
        
        # Generate access token
        access_token = create_access_token(identity=str(user.id))
        
        return jsonify({
            'message': 'User registered successfully',
            'user': {
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'contact_number': user.contact_number,
                'position': user.position
            },
            'access_token': access_token
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 400

@auth_bp.route('/login', methods=['POST'])
def login():
    """Login user and return a JWT token."""
    data = request.get_json()
    
    # Find user by email
    user = User.query.filter_by(email=data.get('email')).first()
    
    # Check if user exists and password is correct
    if not user or not user.check_password(data.get('password')):
        return jsonify({'message': 'Invalid email or password'}), 401
    
    # Generate access token
    access_token = create_access_token(identity=str(user.id))
    
    return jsonify({
        'message': 'Login successful',
        'access_token': access_token,
        'user': {
            'id': user.id,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'contact_number': user.contact_number,
            'position': user.position,
            'role': user.role.value,
            'department_id': user.department_id
        }
    }), 200

@auth_bp.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    """Example protected route that requires authentication."""
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    if not user:
        return jsonify({'message': 'User not found'}), 404
        
    return jsonify({
        'message': 'Protected route',
        'user': {
            'id': user.id,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name
        }
    }), 200
