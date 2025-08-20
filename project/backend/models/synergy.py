from . import db
from datetime import datetime
import pytz
from dotenv import load_dotenv
import os

load_dotenv()

class Synergy(db.Model):
    __tablename__ = 'synergies'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.now(pytz.timezone(os.getenv('APP_TIMEZONE'))))
    credibility_score = db.Column(db.Float, nullable=False)
    referential_score = db.Column(db.Float, nullable=False)
    credibility_reasonings = db.Column(db.Text, nullable=False)
    referential_reasonings = db.Column(db.Text, nullable=False)
    project_reccomendations = db.Column(db.Text, nullable=False)
    
    # One-to-one relationship with Company
    company_id = db.Column(db.Integer, db.ForeignKey('companies.id'), unique=True, nullable=False)
    company = db.relationship('Company', back_populates='synergy')
    
    def to_dict(self):
        return {
            "id": self.id,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "credibility_score": self.credibility_score,
            "referential_score": self.referential_score,
            "credibility_reasonings": self.credibility_reasonings,
            "referential_reasonings": self.referential_reasonings,
            "project_reccomendations": self.project_reccomendations,
            "company_id": self.company_id
        }
    
    def __repr__(self):
        return f'<Synergy {self.id}>'



    
    