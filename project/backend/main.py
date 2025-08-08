from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv
from config import config
from models import db, User

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Configure the app
env = os.getenv('FLASK_ENV')
app.config.from_object(config[env])
config[env].init_app(app)

# Set secret key
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# Configure CORS
CORS(
    app,
    resources={
        r"/*": {
            "origins": os.getenv('ALLOWED_ORIGINS').split(',')
        }
    }
)

# Initialize database
db.init_app(app)

# Create tables
with app.app_context():
    db.create_all()
    # Create admin user if it doesn't exist
    admin = User.query.filter_by(email='admin@example.com').first()
    if not admin and env == 'development':
        admin = User(
            first_name='Admin',
            last_name='User',
            email='admin@example.com',
            is_admin=True,
            password="1234"
        )
        db.session.add(admin)
        db.session.commit()


@app.route('/')
def home():
    return jsonify({"message": "Hello, World!"})

if __name__ == '__main__':
    app.run(
        host=os.getenv('HOST'),
        port=int(os.getenv('PORT')),
        debug=os.getenv('FLASK_ENV') == 'development'
    )
