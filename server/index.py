from flask import Flask
app = Flask(__name__)

@app.route('/')
def display():
	return "Supp flask world"

if __name__ == '__main__':
	app.run(debug = True, port = 8000)