class Masteries(db.Model)
	mastery_id = db.Column(db.Integer, primary_key = True)
	rank = db.Column(db.Integer, unique = False, nullable = False)