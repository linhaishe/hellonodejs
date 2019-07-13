//node hellonodejs.js 即可查看输出

function sayHi() {
    console.log('hi');
}

sayHi();//调用函数的意思

//匿名函数
var sayBye = function () {
    console.log('Bye');
}
sayBye();

//回调函数写法1
function callFunction(fun, name) {
    fun(name);
}

var sayGoodbye = function (name) {
    console.log(name + ' bye!!!');
}

callFunction(sayGoodbye, 'heather');


//回调函数写法2
function callFunction(fun, name) {
    fun(name);
}

callFunction(function (name) {
    console.log(name + ' bye!!!');
},'heather');

//模块

// var counter = require('./count')
// console.log(counter(['ruby','nodejd','react']));

var stuff = require('./count')
console.log(stuff.counter(['ruby','nodejd','react']));
console.log(stuff.adder(3,6));
console.log(stuff.pi);

//暴露方法4
var pi = require('./count').pi
console.log(pi);