from datetime import datetime
import pytz
from . import db
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

class ProjectRecommendation(db.Model):
    """Project Recommendation model."""
    __tablename__ = 'project_recommendations'

    id = db.Column(db.Integer, primary_key=True)
    title1 = db.Column(db.String(200), nullable=False)
    description1 = db.Column(db.Text, nullable=False)
    title2 = db.Column(db.String(200), nullable=False)
    description2 = db.Column(db.Text, nullable=False)
    title3 = db.Column(db.String(200), nullable=False)
    description3 = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))
    updated_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))), 
                         onupdate=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))
    
    # Relationships
    company_id = db.Column(db.Integer, db.ForeignKey('companies.id'), nullable=False)
    company = db.relationship('Company', backref='project_recommendations')

    def __init__(self, **kwargs):
        super(ProjectRecommendation, self).__init__(**kwargs)

    def to_dict(self):
        """Return project recommendation data as a dictionary."""
        return {
            'id': self.id,
            'title1': self.title1,
            'description1': self.description1,
            'title2': self.title2,
            'description2': self.description2,
            'title3': self.title3,
            'description3': self.description3,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None,
            'company_id': self.company_id
        }

    def __repr__(self):
        return f'<ProjectRecommendation {self.id}>'
