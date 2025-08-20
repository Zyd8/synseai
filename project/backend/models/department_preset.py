from models import db
from sqlalchemy import JSON

class DepartmentPreset(db.Model):
    __tablename__ = 'department_presets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    department_queues = db.Column(JSON, nullable=False, default=list)  
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'department_queues': self.department_queues
        }

    def __repr__(self):
        return f'<DepartmentPreset {self.name}>'
        