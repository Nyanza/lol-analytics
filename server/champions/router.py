from . import champions

@champions.route('/')
def champions_list():
	return "champions list"

@champions.route('/id')
def champion_profile():
	return 'champions profile'