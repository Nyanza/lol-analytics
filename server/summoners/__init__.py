from flask import Blueprint

summoners = Blueprint('summoners', __name__)

from . import router