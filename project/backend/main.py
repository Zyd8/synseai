from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from datetime import timedelta
import os
from dotenv import load_dotenv
from config import config
from models import db, User, UserRole
from auth.routes import auth_bp
from routes.company import company_bp
from routes.proposal import proposal_bp
from routes.department import department_bp
from routes.document import document_bp
from routes.reverted_document import reverted_document_bp
from routes.document_setting import document_setting_bp
from routes.synergy import synergy_bp
from routes.department_preset import department_preset_bp
from routes.project_recommendation import bp as project_recommendation_bp
from routes.user import user_bp
from routes.find_company import find_company_bp
import requests

# Load environment variables
load_dotenv()

# Global Flask app instance - configure static files
app = Flask(__name__,
            static_folder="frontend/out",
            static_url_path="")

# Use a session object to avoid unnecessary overhead of creating a new connection each time
# with requests.Session() as session:
#     session.get(os.getenv('SERVICE_PING_URL'))

# Load configuration
env = os.getenv('FLASK_ENV', 'development')
app.config.from_object(config[env])
config[env].init_app(app)

# JWT Configuration
app.config['JSON_SORT_KEYS'] = False
app.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES', 24)))
app.config['JWT_TOKEN_LOCATION'] = ['headers']
app.config['JWT_HEADER_NAME'] = 'Authorization'
app.config['JWT_HEADER_TYPE'] = 'Bearer'

# Initialize extensions
db.init_app(app)
jwt = JWTManager(app)
migrate = Migrate(app, db)
CORS(app, resources={r"/*": {"origins": os.getenv('ALLOWED_ORIGINS', 'http://localhost:3000').split(',')}})

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(company_bp, url_prefix='/api/company')
app.register_blueprint(proposal_bp, url_prefix='/api/proposal')
app.register_blueprint(department_bp, url_prefix='/api/department')
app.register_blueprint(document_bp, url_prefix='/api/document')
app.register_blueprint(user_bp, url_prefix='/api/user')
app.register_blueprint(synergy_bp, url_prefix='/api/synergy')
app.register_blueprint(project_recommendation_bp, url_prefix='/api/project_recommendation')
app.register_blueprint(document_setting_bp, url_prefix='/api/document_setting')
app.register_blueprint(department_preset_bp, url_prefix='/api/department_preset')
app.register_blueprint(reverted_document_bp, url_prefix='/api/reverted_document')
app.register_blueprint(find_company_bp, url_prefix='/api/find_company')

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
                role=UserRole.ADMIN,
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

# Serve index.html for the root
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

# Catch-all route for client-side routing
@app.route("/<path:path>")
def catch_all(path):
    # First try to serve the exact file
    try:
        return send_from_directory(app.static_folder, path)
    except:
        # If file doesn't exist, serve index.html for SPA routing
        return send_from_directory(app.static_folder, "index.html")

if __name__ == '__main__':
    # Run the app
    app.run(
        host=os.getenv('HOST', '0.0.0.0'),
        port=int(os.getenv('PORT', 5000)),
        debug=os.getenv('FLASK_ENV') == 'development'
    )
