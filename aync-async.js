//文件系统库
var fs = require('fs');

//nodejs执行js时是单线程的IOO操作，如果一个阶段耗时，则会阻塞流程，因为同一时间只能执行一个任务，所以用异步进行处理
//readFileSync将Sync去掉则为异步，且都会有回调函数跟着
//写nodejs最好都用异步的方式进行处理
//因为是异步操作，finished 会最先被打印出来，以为其他的操作需要一定的时间进行处理
var readMeOne = fs.readFile("readdemo.txt", "utf8", function(err, data) {
    //data是readdemo的内容，会将数据传给data
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

//异步写入
// var readMeThird = fs.readFile("readdemo.txt", "utf8", function(err, data) {
//     fs.writeFile('writeMe2.txt',data,function(){
//         console.log('writeme2 has finished')
//     })
// });


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

