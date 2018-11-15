const http = require('http');
const port = 8080
const hostname = '127.0.0.1';
const server = http.createServer(function (req, res) {

    var param = parseFloat(req.url.replace('/', ''));
    output = {}
    trivials = [0, 1, 2]
    output['input'] = param
    output['datetime'] = ((new Date).getTime() / 1000);
    if (isNaN(param)) {
        output['error'] =  req.url.replace('/', '') + ' is not a number'
        req_status = 400
    } else if (param < 0) {
        output['error'] = 'Why so negative?'
        req_status = 400
    } else if (!Number.isInteger(param)) {
        output['error'] = 'You couldn\'t just get a whole number?'
        req_status = 400
    } else if (trivials.includes(param)) {
        output['sequence'] = fibSeq(param)
        output['note'] = '0, 1, and 2 return the trivial initial sequence, set by definition'
        req_status = 200
    } else {
        output['sequence'] = fibSeq(param)
        req_status = 200
    }
    str = JSON.stringify(output);
    res.writeHead(req_status, {'Content-Type': 'text/json'});
    res.end(str)
    console.log(req_status + ' ' + req.connection.remoteAddress + ' ' + param)
})

function fibSeq(p1) {
    var fib_array = [1, 1]
    var last_element = fib_array[fib_array.length-1]
    //The next element is just the sum of the current last 2 elements
    while (fib_array.length < p1) {
        fib_array.push(fib_array[fib_array.length-1] + fib_array[fib_array.length-2])
    }
    return fib_array
}

function myFunction(p1) {
    return p1 * p1
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

