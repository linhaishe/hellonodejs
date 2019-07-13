//流的应用体现
//1.标准输入，标准输出
//2.数据处理，http请求的处理，请求响应
//3.打包压缩
//4.提高性能，大文件用流处理，放到buffer等，变缓存边处理

// 解压
var crypto = require('crypto');
var fs = require('fs');
var zlib = require('zlib');

var password = new Buffer(process.env.PASS || 'password');
var decryptStream = crypto.createDecipher('aes-256-cbc', password);

var gzip = zlib.createGunzip();
var readStream = fs.createReadStream(__dirname + '/out.gz');

readStream // reads current file
    .pipe(gzip) // uncompresses
    .pipe(decryptStream) // decrypts
    .pipe(process.stdout) // writes to terminal
    .on('finish', function() { // finished
        console.log('done');
    });

// 压缩
var crypto = require('crypto');
var fs = require('fs');
var zlib = require('zlib');

var password = new Buffer(process.env.PASS || 'password');
var encryptStream = crypto.createCipher('aes-256-cbc', password);

var gzip = zlib.createGzip();
var readStream = fs.createReadStream(__dirname + "/readMe.txt"); // current file
var writeStream = fs.createWriteStream(__dirname + '/out.gz');

readStream // reads current file
    .pipe(encryptStream) // encrypts
    .pipe(gzip) // compresses
    .pipe(writeStream) // writes to out file
    .on('finish', function() { // all done
        console.log('done');
    });


// 流和管道
var fs = require('fs');
//创建读的流，读取readmetxt文件，放进流中
//Streams can be readable, writable, or both. All streams are instances of EventEmitter.
//流拥有事件的特性，绑定监听函数，因为其是事件的实例
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.pipe(myWriteStream);//使用管道，只用一行就够了，等于下面57-76行
//ls | grep app,myReadStream = ls , pipe = |,myWriteStream = app
var writeData = "hello world";
myWriteStream.write(writeData);
myWriteStream.end();//结束
//监听
myWriteStream.on('finish', function() {
    console.log('finished');
})

myReadStream.setEncoding('utf8');

var data = ""

myReadStream.on('data', function(chunk) {
    // data += chunk;
    myWriteStream.write(chunk);
})

myReadStream.on('end', function() {
    // console.log(data);
})