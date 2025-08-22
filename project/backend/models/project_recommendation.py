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
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))
    updated_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))), 
                         onupdate=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))
    
    # Relationships
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship('User', backref='project_recommendations')

    def __init__(self, **kwargs):
        super(ProjectRecommendation, self).__init__(**kwargs)

    def to_dict(self):
        """Return project recommendation data as a dictionary."""
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None,
            'user_id': self.user_id
        }

    def __repr__(self):
        return f'<ProjectRecommendation {self.title}>'
