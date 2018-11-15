import flask
import argparse
import sys
import time
from json import dumps

app = flask.Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/fibonacci')
def fibonacci():
    response = {}
    query = flask.request.query_string
    trivials = [0, 1, 2]
    response['input'] = query
    response['datetime'] = time.time()
    try:
        num = float(query)
        if num in trivials:
            response['note'] = '0, 1, and 2 return the trivial initial sequence, set by definition'
            response['sequence'] = fibs
        elif int(num) != num:
            response['error'] = 'Positive integer required'
            status=400
        elif num < 0:
            response['error'] = 'Why so negative?'
            status=400
        else:
            fibs = generate_fibseq(num)
            status = 200
            response['sequence'] = fibs
    except ValueError:
        response['error'] = 'Positive integer required'
        status = 400
    
    return flask.Response(dumps(response), status=status, mimetype='text/json')

def generate_fibseq( num ):
    fibs = [1, 1]
    while len(fibs) < num:
        fibs.append(fibs[-1] + fibs[-2])
    return fibs

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return 'Well, you broke the internet.  Good job.  Page not found.', 404

app.run(debug=True)
