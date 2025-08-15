from datetime import datetime
import pytz
from . import db
from dotenv import load_dotenv
import os

load_dotenv()

class Document(db.Model):
    __tablename__ = 'document'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    file = db.Column(db.String(255), nullable=False)  # store file path or filename
    created_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(
            pytz.timezone(os.getenv("TIMEZONE", "UTC"))
        )
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "file": self.file,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }

    def __repr__(self):
        return f'<Document {self.name}>'
