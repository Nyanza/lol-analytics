from flask import Flask
from flask import render_template

app = Flask(__name__)
api_path = '/api/v1/'

from champions import champions
app.register_blueprint(champions, url_prefix = api_path + 'champions')

from summoners import summoners
app.register_blueprint(summoners, url_prefix = api_path + 'summoners')

from matches import matches
app.register_blueprint(matches, url_prefix = api_path + 'matches')


#serve client template with catch all path
@app.route('/', defaults={ 'path': '' })
@app.route('/<path:path>')
def client(path):
	return render_template('index.html', title = 'LOL Analytics tool')


if __name__ == '__main__':
	app.run(debug = True, port = 8000)