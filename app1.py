
from flask import Flask
app = Flask(__name__,static_url_path="/static",static_folder="/Users/Sayan/Documents/GitHub/BIET/static")

@app.route('/')
def homepage():
    return app.send_static_file('index.html')

@app.route('/index.html')
def homepage1():
    return app.send_static_file('index.html')

@app.route('/onecolumn.html')
def about():
    return app.send_static_file('onecolumn.html')

@app.route('/twocolumn1.html')
def contact():
    return app.send_static_file('twocolumn1.html')

@app.route('/twocolumn2.html')
def ideation():
    return app.send_static_file('twocolumn2.html')

if __name__=='__main__':
    app.run()