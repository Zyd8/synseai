from . import db
from datetime import datetime
import pytz
from dotenv import load_dotenv
import os

load_dotenv()

class Department(db.Model):
    __tablename__ = 'departments'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))
    
    # Relationship back to Company (one-to-one)
    company = db.relationship('Company', back_populates='department', uselist=False)

    def to_dict(self):
        """Convert department object to dictionary."""
        return {
            'id': self.id,
            'name': self.name,
            'created_at': self.created_at.isoformat() if self.created_at else None,
        }

    def __repr__(self):
        return f'<Department {self.name}>'