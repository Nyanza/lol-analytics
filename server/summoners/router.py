from . import summoners

@summoners.route('/')
def summoners_home():
	return "summoners home"

@summoners.route('/id')
def champion_profile():
	return 'summoners profile'