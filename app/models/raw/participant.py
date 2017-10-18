class Participant(db.Model)
	participant_id = db.Column(db.Integer, primary_key = True)
	stats_id = db.Column(db.Integer, unique = False, nullable = False)
	first_inhibitor = db.Column(db.Boolean, unique = False, nullable = False)
	highest_achieved_tier = db.Column(db.String(10), unique = False, nullable = False)
	spell1_id = db.Column(db.Integer, unique = False, nullable = False)
	spell2_id = db.Column(db.Integer, unique = False, nullable = False)
	lane = db.Column(db.String(10), unique = False, nullable = False)
	role = db.Column(db.String(5), unique = False, nullable = False)
	player_id = db.Column(db.Integer, unique = False, nullable = False)