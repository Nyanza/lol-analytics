from . import matches

@matches.route('/')
def matches_home():
	return "matches home"

@matches.route('/id')
def champion_profile():
	return 'selected match'