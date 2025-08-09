from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from datetime import timedelta
import os
from dotenv import load_dotenv
from config import config
from models import db, User, Company
from auth.routes import auth_bp
from routes.company import company_bp
from routes.proposal import proposal_bp

# Load environment variables
load_dotenv()

def create_app():
    app = Flask(__name__)
    
    # Load configuration
    env = os.getenv('FLASK_ENV', 'development')
    app.config.from_object(config[env])
    config[env].init_app(app)
    
    # JWT Configuration
    app.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY')
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES')))
    app.config['JWT_TOKEN_LOCATION'] = ['headers']
    app.config['JWT_HEADER_NAME'] = 'Authorization'
    app.config['JWT_HEADER_TYPE'] = 'Bearer'
    
    # Initialize extensions
    db.init_app(app)
    jwt = JWTManager(app)
    CORS(app, resources={r"/*": {"origins": os.getenv('ALLOWED_ORIGINS').split(',')}})
    
    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(company_bp, url_prefix='/api/company')
    app.register_blueprint(proposal_bp, url_prefix='/api/proposal')
    
    # Create database tables
    with app.app_context():
        db.create_all()
        
        # Create admin user if it doesn't exist (for development)
        if env == 'development':
            admin = User.query.filter_by(email='admin@example.com').first()
            if not admin:
                admin = User(
                    first_name='Admin',
                    last_name='User',
                    email='admin@example.com',
                    is_admin=True,
                    is_employee=True,
                    position='System Administrator',
                    password="1234"
                )
                
                db.session.add(admin)
                db.session.commit()
    
    # Error handlers
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({'message': 'Resource not found'}), 404
    
    @app.errorhandler(500)
    def server_error(error):
        return jsonify({'message': 'Internal server error'}), 500
    
    # Home route
    @app.route('/')
    def home():
        return jsonify({"message": "Welcome to the API"})
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(
        host=os.getenv('HOST'),
        port=int(os.getenv('PORT')),
        debug=os.getenv('FLASK_ENV') == 'development'
    )
