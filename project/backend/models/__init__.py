from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Import models here to avoid circular imports
from .user import User, UserRole  # noqa
from .company import Company  # noqa
from .proposal import Proposal, ProposalStatus  # noqa
from .department import Department  # noqa
from .document import Document  # noqa
from .document_setting import Document_setting  # noqa
from .synergy import Synergy  # noqa
from .department_preset import DepartmentPreset  # noqa

