const http = require('http');
const port = 8080
const hostname = '127.0.0.1';
const server = http.createServer(function (req, res) {

    var params = req.url.replace('/', '');
    output = {}
    output['input'] = params
    output['datetime'] = ((new Date).getTime() / 1000);
    if (isNaN(params)) {
        output['error'] = params + ' is not a number'
        req_status = 400
    } else if (params < 0) {
        output['error'] = 'Why so negative?'
        req_status = 400
    } else if ((params >= 0) && (params <= 2)) {
        output['sequence'] = fibSeq(params)
        output['note'] = '0, 1, and 2 return the trivial initial sequence, set by definition'
        req_status = 200
    } else {
        output['sequence'] = fibSeq(params)
        req_status = 200
    }
    str = JSON.stringify(output);
    res.writeHead(req_status, {'Content-Type': 'text/json'});
    res.end(str)
    console.log(req_status + ' ' + req.connection.remoteAddress + ' ' + params)
})

function fibSeq(p1) {
    var fib_array = [1, 1]
    var last_element = fib_array[fib_array.length-1]
    //The next element is just the sum of the current last 2 elements
    while (fib_array.length-1 < p1) {
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

