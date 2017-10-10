from flask import render_template

@app.route('/index')
def render():
	return 'index!';
	# return render_template('../index.html');