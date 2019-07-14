var http = require('http');
var fs = require('fs');

function startServer(route, handle) {
    var onRequest = function(request, response) {
        console.log('Request received ' + request.url);
        route(handle, request.url, response);
        //route function 括号里为参数，在startserver中获得实时参数后，将参数传给route这个函数，函数功能在router文件里
    }

    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1');
    console.log('Server started on localhost port 3000');
}

module.exports.startServer = startServer;