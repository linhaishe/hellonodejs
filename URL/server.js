var http = require('http');
var fs = require('fs');

function startServer() {
    var onRequest = function(request, response) {
        //request 封装了浏览器请求的各种参数信息，可以直接进行判断浏览器的各种请求
        //console.log(request);//会输出很多信息
        console.log('Request received ' + request.url);
        //request.url 输出获取到的路由信息
        if (request.url === '/' || request.url === '/home') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);
        } else if (request.url === '/review') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(response);
        } else if (request.url === '/api/v1/records') {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            var jsonObj = {
                name: "hfpp2012"
            };
            response.end(JSON.stringify(jsonObj));
        } else {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response);
        }
    }

    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1');
    console.log('Server started on localhost port 3000');
}

exports.startServer = startServer;