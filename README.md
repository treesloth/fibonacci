# fibonacci
Fibonacci sequence generating web services

This repo contains 2 versions of this utility.  Others may be added later.  Find the one you want.

##  Python

Start by installing:
- Flask - sudo pip install flask

Once this is installed, run fibonacci.py:
- # python fibonacci.py

This will open a listener on port 5000.  Open a browser and go to the address:
- http://127.0.0.1:5000/fibonacci?5

You should see output similar to the following:
- {"input": "5", "sequence": [1, 1, 2, 3, 5], "datetime": 1542265258.440012}

Change the numbee following the ? as desired.  A few test cases to try:
- http://127.0.0.1:5000/fibonacci?5
- http://127.0.0.1:5000/fibonacci?-5
- http://127.0.0.1:5000/fibonacci?2
- http://127.0.0.1:5000/fibonacci?0
- http://127.0.0.1:5000/fibonacci?test


