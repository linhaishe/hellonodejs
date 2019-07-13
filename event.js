//事件

var events = require('events');
//有些文件是核心库里本就有的文件，直接引用即可

var util = require('util');
// util是一个node核心工具库，包含很多功能

var Person = function(name) {
    this.name = name
}

// Person 继承于 events.EventEmitter??
util.inherits(Person, events.EventEmitter);

var xiaoming = new Person('xiaoming');
var lili = new Person('lili');
var lucy = new Person('lucy');

// 定义一个Person类
var person = [xiaoming, lili, lucy];

//给每个人绑定一个事件
person.forEach(function(person) {
    person.on('speak', function(message) {
        console.log(person.name + " said: " + message);
    })
})
// 触发事件
xiaoming.emit('speak', 'hi');
lucy.emit('speak', 'I want a curry');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(message) {
//     console.log(message);
// })
//绑定监听函数

// myEmitter.emit('someEvent', 'the event was emitted');