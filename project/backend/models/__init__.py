from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Import models here to avoid circular imports
from .user import User  # noqa
from .company import Company  # noqa
from .proposal import Proposal  # noqa
from .department import Department  # noqa
