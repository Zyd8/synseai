from datetime import datetime
import pytz
from . import db
from dotenv import load_dotenv
import os

load_dotenv()

class Reverted_document(db.Model):
    __tablename__ = 'reverted_documents'

    id = db.Column(db.Integer, primary_key=True)
    file = db.Column(db.String(255), nullable=False)
    last_revert = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))

    #Foreign Key to document
    document_id = db.Column(db.String(36), db.ForeignKey('documents.id'), nullable=False)
    document = db.relationship("Document", backref="reverts")

    def to_dict(self):
        return {
            "id": self.id,
            "file": self.file,
            "last_revert": self.last_revert.isoformat() if self.created_at else None,
            "document_id": self.document_id
        }

    def __repr__(self):
        return f'<Reverted_document {self.id}>'
