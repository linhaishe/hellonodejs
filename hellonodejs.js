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

//node hellonodejs.js 即可查看输出

//回调函数写法2
function callFunction(fun, name) {
    fun(name);
}

callFunction(function (name) {
    console.log(name + ' bye!!!');
},'heather');
