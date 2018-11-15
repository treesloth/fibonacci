# fibonacci
Fibonacci sequence generating web services

This repo contains 2 versions of this utility.  Others may be added later.  Find the one you want.

##  Python

We start with the assumption that you have Python 2.7ish and pip installed.

Start by installing:
- Flask - sudo pip install flask

Once this is installed, run fibonacci.py:
- python fibonacci.py

This will open a listener on port 5000.  Open a browser and go to the address:
- http://127.0.0.1:5000/fibonacci?5

You should see output similar to the following:
- {"input": "5", "sequence": [1, 1, 2, 3, 5], "datetime": 1542265258.440012}

Change the number following the ? as desired.  A few test cases to try:
- http://127.0.0.1:5000/fibonacci?5
- http://127.0.0.1:5000/fibonacci?-5
- http://127.0.0.1:5000/fibonacci?.5
- http://127.0.0.1:5000/fibonacci?2
- http://127.0.0.1:5000/fibonacci?0
- http://127.0.0.1:5000/fibonacci?test


##  Node.js

We start this with a little less assumption.  If you have a working Node.js installation, great.  That should do it.  If not, give this a shot:

- sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
- nvm install stable

Once installed, run the command:
- js fibonacci.js

This will open a listener on port 80800.  Open a browser and go to the address:
- http://127.0.0.1:8080/5

You should see output similar to:
- {"input":"5","datetime":1542266520.221,"sequence":[1,1,2,3,5]}

Change the number following the ? as desired.  A few test cases to try:
- http://127.0.0.1:8080/5
- http://127.0.0.1:8080/-5
- http://127.0.0.1:8080/.5
- http://127.0.0.1:8080/2
- http://127.0.0.1:8080/0
- http://127.0.0.1:8080/test



