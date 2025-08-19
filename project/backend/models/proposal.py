from . import db
from datetime import datetime
from enum import Enum
import pytz
from dotenv import load_dotenv
import os

class ProposalStatus(Enum):
    ONGOING = 'Ongoing'
    REJECTED = 'Rejected'
    APPROVED = 'Approved'
    SUBMITTED = 'Submitted'

load_dotenv()

class Proposal(db.Model):
    __tablename__ = 'proposals'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    collab_type = db.Column(db.String(50), nullable=True)
    status = db.Column(db.Enum(ProposalStatus), nullable=False, default=ProposalStatus.SUBMITTED)
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
            "collab_type": self.collab_type,
            "status": self.status.value if self.status else None,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }
    
    def __repr__(self):
        return f'<Proposal {self.title}>'