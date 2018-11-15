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
    except ValueError:
        response['error'] = 'Positive integer required'
        return dumps(response), 400

    if int(num) != num or num < 0:
        response['error'] = 'Positive integer required'
        return dumps(response), 400

    fibs = generate_fibseq(num)
    response['sequence'] = fibs
    if num in trivials:
        response['note'] = '0, 1, and 2 return the trivial initial sequence, set by definition'
    return dumps(response), 200

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
