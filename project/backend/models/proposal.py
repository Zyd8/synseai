from . import db
from datetime import datetime
import pytz
from dotenv import load_dotenv
import os

load_dotenv()

class Proposal(db.Model):
    __tablename__ = 'proposals'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))
    
    # Foreign key to Company
    company_id = db.Column(db.String(36), db.ForeignKey('companies.id'), nullable=False)
    
    # Relationship
    company = db.relationship('Company', back_populates='proposals')

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }
    
    def __repr__(self):
        return f'<Proposal {self.title}>'
    