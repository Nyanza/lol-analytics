from flask import Blueprint

champions = Blueprint('champions', __name__)

from . import router