var fs = require('fs');
//操作文件系统

//创建目录
fs.mkdir('stuff', function() {
    //将当前路径下的文件读取出来，编码，
    fs.readFile('readMe.txt', 'utf8', function(err, data) {
        //创建目录和文件，在新建的stuff目录下，改名为writeme,输入读取的文件的内容
        fs.writeFile('./stuff/writeMe.txt', data, function() {
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