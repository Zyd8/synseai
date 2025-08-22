from datetime import datetime
import pytz
from . import db
from dotenv import load_dotenv
import os

load_dotenv()

class Document(db.Model):
    __tablename__ = 'documents'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    type = db.Column(db.String(255), nullable=False)
    file = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    is_bpi = db.Column(db.Boolean, nullable=False, default=False)
    is_assigned = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))

    #Foreign Key to proposal
    proposal_id = db.Column(db.String(36), db.ForeignKey('proposals.id'), nullable=True)
    #proposal = db.relationship('Proposal', back_populates='documents')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type,
            "file": self.file,
            "description": self.description,
            "is_bpi": self.is_bpi,
            "is_assigned": self.is_assigned,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "proposal_id": self.proposal_id
        }

    def __repr__(self):
        return f'<Document {self.name}>'
