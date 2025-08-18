from datetime import datetime
import pytz
from . import db
from dotenv import load_dotenv
import os

load_dotenv()

class Company(db.Model):
    """Company model representing organizations using the system.
    
    One-to-one relationship with User model (one company per user).
    """
    __tablename__ = 'companies'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    contact_email = db.Column(db.String(120), unique=True, nullable=False)
    website = db.Column(db.String(255), nullable=True) 
    address = db.Column(db.Text, nullable=True)
    logo = db.Column(db.Text, nullable=True)  
    bio = db.Column(db.Text, nullable=True)
    industry = db.Column(db.String(100), nullable=True)
    size = db.Column(db.String(20), nullable=True)  # Stored as text, e.g., '1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'
    created_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))
    
    # One-to-one relationship with User
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), unique=True, nullable=False)
    user = db.relationship('User', back_populates='company', uselist=False)
    
    # Relationship with Proposals (one-to-many)
    proposals = db.relationship('Proposal', back_populates='company', cascade='all, delete-orphan')
    
    # One-to-one relationship with Department
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'), unique=True, nullable=True)
    department = db.relationship('Department', back_populates='company', uselist=False)
    
    # One-to-one relationship with Synergy
    synergy = db.relationship('Synergy', back_populates='company', uselist=False, cascade='all, delete-orphan')
    
    def to_dict(self):
        """Convert company object to dictionary."""
        return {
            'id': self.id,
            'name': self.name,
            'contact_email': self.contact_email,
            'website': self.website,
            'address': self.address,
            'logo': self.logo,
            'bio': self.bio,
            'industry': self.industry,
            'size': self.size,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }
    
    def __repr__(self):
        return f'<Company {self.name}>'