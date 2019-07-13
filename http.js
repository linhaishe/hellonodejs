var http = require('http');
//响应文本给客户端
//服务器请求
//写法1
// var server = http.createServer(function(request, response) {
//     console.log('Request received');
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     // response.write('Hello from out application');
//     response.end('Hello from out application');
//     //all done
// })
// server.listen(3000, '127.0.0.1');
// console.log('Server started on localhost port 3000');



//写法2
var onRequest = function(request, response) {
    console.log('Request received');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // response.write('Hello from out application');
    response.end('Hello from out application');
    //all done
}

var server = http.createServer(onRequest);

//给服务器一个监听端口
server.listen(3000, '127.0.0.1');
console.log('Server started on localhost port 3000');


// response.write 是可以写多个的。
// response.write('<html>');
// response.write('<body>');
// response.write('<h1>Hello, World!</h1>');
// response.write('</body>');
// response.write('</html>');
// response.end();