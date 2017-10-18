# root json
# https://jsonblob.com/948cf614-ad34-11e7-894a-9176c063927e

from flask_sqlalchemy import SQLAlchemy
# from yourapplication.database import metadata, db_session

db = SQLAlchemy()

class Match(db.Model):
	match_id = db.Column(db.Integer, primary_key = True)
	season_id = db.Column(db.Integer, unique = False, nullable = False)
	queue_id = db.Column(db.Integer, unique = False, nullable = False)
	game_id = db.Column(db.Integer, unique = False, nullable = False)
	game_version = db.Column(db.Integer, unique = False, nullable = False)
	platform_id = db.Column(db.String(5), unique = False, nullable = False)
	game_mode = db.Column(db.String(10), unique = False, nullable = False)
	map_id = db.Column(db.Integer, unique = False, nullable = False)
	game_duration = db.Column(db.Integer, unique = False, nullable = False)
	game_creation = db.Column(db.Integer, unique = False, nullable = False)