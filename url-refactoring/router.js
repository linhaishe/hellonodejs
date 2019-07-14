var fs = require('fs');

function route(handle, pathname, response) {
    console.log('Routing a request for ' + pathname);
    //判断handle[pathname]是否是一个函数，如果是函数的话，就执行handle[pathname]()函数
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response);
    }
}

module.exports.route = route;
//