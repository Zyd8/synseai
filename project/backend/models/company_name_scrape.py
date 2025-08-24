from . import db
from datetime import datetime
import pytz
import os
from dotenv import load_dotenv

load_dotenv()

def get_timezone():
    """Get timezone with fallback to UTC"""
    timezone_name = os.getenv('APP_TIMEZONE', 'UTC')
    return pytz.timezone(timezone_name)

class CompanyNameScrape(db.Model):
    __tablename__ = 'company_name_scrapes'

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(255), nullable=False)
    credibility_score = db.Column(db.Float, nullable=False)
    referential_score = db.Column(db.Float, nullable=False)
    credibility_reasoning = db.Column(db.Text, nullable=False)
    referential_reasoning = db.Column(db.Text, nullable=False)
    compliance_score = db.Column(db.Float, nullable=False)
    compliance_reasoning = db.Column(db.Text, nullable=False)
    project_title1 = db.Column(db.String(200), nullable=False)
    project_description1 = db.Column(db.Text, nullable=False)
    project_title2 = db.Column(db.String(200), nullable=False)
    project_description2 = db.Column(db.Text, nullable=False)
    project_title3 = db.Column(db.String(200), nullable=False)
    project_description3 = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(get_timezone()))

    def to_dict(self):
        return {
            "id": self.id,
            "company_name": self.company_name,
            "credibility_score": self.credibility_score,
            "referential_score": self.referential_score,
            "credibility_reasoning": self.credibility_reasoning,
            "referential_reasoning": self.referential_reasoning,
            "compliance_score": self.compliance_score,
            "compliance_reasoning": self.compliance_reasoning,
            "project_title1": self.project_title1,
            "project_description1": self.project_description1,
            "project_title2": self.project_title2,
            "project_description2": self.project_description2,
            "project_title3": self.project_title3,
            "project_description3": self.project_description3,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }
    
    def __repr__(self):
        return f'<CompanyNameScrape {self.company_name}>'
    