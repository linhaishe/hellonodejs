var counter = function(arr){
    return "there are " + arr.length + " element in the array";
}

var adder = function(a,b){
    return `the sum of the 2 number is ${a+b}`;
    //注意：是`不是'
}

var pi = 3.14;
//counter is not defined 是因为模块没有进行暴露

//文件中只有一个function需要暴露的时候，单独暴露一个function
//module.exports = counter


//暴露多个function

//方法1
// module.exports.counter = counter
// module.exports.adder=adder;
// module.exports.pi=pi

//方法2 
module.exports = {
    counter:counter,
    adder:adder,
    pi:pi
}

//方法3
module.exports = {
    counter:function(arr){
        return "there are " + arr.length + " element in the array";
    },
    adder:adder,
    pi:pi
    //最后一个不需要逗号
}

//当counter的函数放在暴露框架里面时，框架外面的函数则不需要进行书写




