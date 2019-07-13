var fs = require('fs');
//操作文件系统

//创建目录
fs.mkdir('stuff', function () {
    //将当前路径下的文件读取出来，编码，
    fs.readFile('readMe.txt', 'utf8', function (err, data) {
        //创建目录和文件，在新建的stuff目录下，改名为writeme,输入读取的文件的内容
        fs.writeFile('./stuff/writeMe.txt', data, function () {
            console.log('copy successfully');
        })
    })
});

//删除文件
// fs.unlink("writeMe.txt", function() {
//     console.log("delete writeMe.txt file");
// })

//创建目录，不是文件
//fs.mkdirsync("stuff");
//删除目录
//fs.rmdirsync("stuff");

// const fs = require('fs');
// const mkdir = function (dirname) {
//     return new Promise(function (resolve, reject) {
//         fs.mkdir(dirname, () => {
//             resolve();
//         });
//     });
// };
// const readFile = function (fileName) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(fileName,
//             function (error, data) {
//                 if (error) return reject(error);
//                 resolve(data);
//             });
//     });
// };
// const writeFile = function (fileName, data) {
//     return new Promise(function (resolve, reject) {
//         fs.writeFile(fileName, data, () => {
//             resolve(1);
//         })
//     });
// };
// const asyncReadFile = async
// function() {
//     const f1 = await mkdir('stuff');
//     const f2 = await readFile('./abc.txt');
//     const f3 = await writeFile('./stuff/abc_copy.txt', f2);
// };
// asyncReadFile().then((d) => {
//     console.log('copy success');
// })