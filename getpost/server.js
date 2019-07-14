var http = require('http');
var fs = require('fs');
var url = require('url');
//处理路由的库
var querystring = require('querystring');
//

function startServer(route, handle) {
    var onRequest = function(request, response) {
        var pathname = url.parse(request.url).pathname;
        //作用是取路径名，多余的信息则略过
        ///api/v1/records?a=b,则获取到问号之前的路径名
        console.log('Request received ' + pathname);
        var data = [];
        request.on("error", function(err) {
            console.error(err);
            //错误时显示出来
        }).on("data", function(chunk) {
            data.push(chunk);
            //接受数据的时候chunk在一起
        }).on('end', function() {
            //接收完之后将数据传给route
            if (request.method === "POST") {
                //防止数据发送过多
                if (data.length > 1e6) {
                    request.connection.destroy();
                }
                data = Buffer.concat(data).toString();
                route(handle, pathname, response, querystring.parse(data));
            } else {
                var params = url.parse(request.url, true).query;
                //解析地址栏，返回3000端口后的内容，true返回的是数据，false返回的是字符串
                route(handle, pathname, response, params);
            }
        });
    }

    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1');
    console.log('Server started on localhost port 3000');
}

module.exports.startServer = startServer;