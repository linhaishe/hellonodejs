//文件系统库
var fs = require('fs');

var readMeOne = fs.readFile("readdemo.txt", "utf8", function(err, data) {
    var waitTill = new Date(new Date().getTime() + 2 * 1000);
    while (waitTill > new Date()) {}
    console.log("first async");
});

var readMeTwo = fs.readFile("readdemo.txt", "utf8", function(err, data) {
    var waitTill = new Date(new Date().getTime() + 2 * 1000);
    while (waitTill > new Date()) {}
    console.log("second async");
});

console.log("finished");

//同步内容 sync

//read document
var readMe = fs.readFileSync("readdemo.txt", "utf8");
console.log(readMe);

//creat document/file
//将readdemo的内容读取了之后放到writedemo文件中
//将自动创建新的文档名为writedemo的txt文件，且内容和readdemo.txt的内容相同
fs.writeFileSync("writedemo.txt",readMe);
//fs.writeFileSync("writedemo.txt","hello world");
//则内容为hello world
//参数：文件名，内容

var readMe = fs.readFileSync("readdemo.txt", "utf8");
console.log(readMe);
console.log("finished");
//从头到尾一步一步执行的，同步进行执行

//异步内容

