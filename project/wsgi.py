# This file contains the WSGI configuration required to serve up your
# web application at http://<your-username>.pythonanywhere.com/
# It works by setting the variable 'application' to a WSGI handler of some
# description.
#
# The below has been auto-generated for your Flask project

import sys
import os

# add your project directory to the sys.path
project_home = '/home/zydev/synseai'
if project_home not in sys.path:
    sys.path = [project_home] + sys.path

# Set environment variables for production
os.environ['FLASK_ENV'] = 'production'
os.environ['SECRET_KEY'] = 'your_secret_key_here'  # Replace with your actual secret key
os.environ['APP_TIMEZONE'] = 'UTC'  # Required for pytz timezone configuration

# Database configuration - Update these with your PythonAnywhere MySQL details
os.environ['DB_TYPE'] = 'mysql'
os.environ['DB_USER'] = 'zydev'  # Your PythonAnywhere username
os.environ['DB_PASSWORD'] = 'your_mysql_password'  # Your MySQL password
os.environ['DB_HOST'] = 'zydev.mysql.pythonanywhere-services.com'
os.environ['DB_NAME'] = 'zydev$synseai'  # Your database name (usually username$dbname)

# JWT Configuration
os.environ['JWT_ACCESS_TOKEN_EXPIRES'] = '24'

# CORS Configuration - Update with your frontend domain
os.environ['ALLOWED_ORIGINS'] = 'https://zydev.pythonanywhere.com,https://www.zydev.pythonanywhere.com'

# Company Service URLs - Update with your service URLs
os.environ['COMPANY_SCORING_SCRAPE_URL'] = 'http://localhost:5001/company_scoring_scrape'
os.environ['COMPANY_PROJECT_RECCOMENDER_SCRAPE_URL'] = 'http://localhost:5001/company_project_recommendation_scrape'
os.environ['COMPANY_NAMES_FROM_TRAITS_URL'] = 'http://localhost:5001/company_names_from_traits'

# import flask app but need to call it "application" for WSGI to work
from project.backend.main import app as application
