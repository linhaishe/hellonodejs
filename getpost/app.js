var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle = {};
//给对象添加路由，路由等于handler里面的操作方法
//key = value
//key是一个路径，value是一个函数
handle["/"] = handler.home;
handle['/home'] = handler.home;
handle['/review'] = handler.review;
handle['/api/v1/records'] = handler.api_records;

server.startServer(router.route, handle);