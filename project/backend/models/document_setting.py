from datetime import datetime
import pytz
from . import db
from dotenv import load_dotenv
import os
from sqlalchemy import JSON 

load_dotenv()

class Document_setting(db.Model):
    __tablename__ = 'document_settings'

    id = db.Column(db.Integer, primary_key=True)
    current_location = db.Column(db.Integer, nullable=False)
    iteration = db.Column(JSON, nullable=False, default=list)
    created_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))
    updated_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))

    #Foreign Key to proposal
    document_id = db.Column(db.String(36), db.ForeignKey('documents.id'), nullable=False)

    document = db.relationship("Document", backref="settings")

    def to_dict(self):
        return {
            "id": self.id,
            "current_location": self.current_location,
            "iteration": self.iteration,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.created_at.isoformat() if self.created_at else None,
            "document_id": self.document_id,
                "document": {
                    "id": self.document.id,
                    "name": self.document.name,
                    "proposal_id": self.document.proposal_id
                }
        }

    def __repr__(self):
        return f'<Document_setting {self.id}>'
