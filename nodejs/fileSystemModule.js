'use strict';

//Node.js内置的fs模块就是文件系统模块，负责读写文件。
var fileSystem = require('fs');

//这里是相对路径 ./表示在当前目录下 ../表示在上一级目录下, 所以要保证进程是在当前目录下进行的, 才能找到正确的文件路径

//异步读取文件
fileSystem.readFile('./readText.txt', 'utf-8', function (error, data) {
  if (error) {
    console.log(error);
  } else {
    //console.log(data);
  }
});

//异步读取二进制数据, 如读取图片(读取二进制时, 就是01指令, 不需要传编码格式)
fileSystem.readFile('./travel.png', function (error, data) {
  if (error) {
    console.log(error);
  } else {
    //会返回一个Buffer对象, 在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。
    //console.log(data);
    //Buffer对象按照指定的编码转换为字符串类型
    //console.log(data.toString('utf-8'));
    //把一个字符串转成一个Buffer对象
    var buffer = new Buffer(data.toString('utf-8'), 'utf-8');
    //console.log(buffer);
  }
});

//同步操作会阻塞线程, 所以用处不大, 同步操作使用trycatch来捕获错误
/*
try {
  var data = fileSystem.readFileSync("./readText.txt", 'UTF-8');
} catch (error) {
  console.log(error);
}
*/

//异步写入文件(writeFile的参数依次是要写入数据的文件路径, 要写入的数据, 回调函数)
var name = "花果山齐天大圣孙悟空";
//这个文件写入, 跟其他是一直的, 是属于一种覆盖操作
//如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是Buffer，则写入的是二进制文件。回调函数由于只关心成功与否，因此只需要一个err参数。
fileSystem.writeFile('./readText.txt', name, function(error, data) {
  //console.log(error);
});


//获取文件的信息
fileSystem.stat("./travel.png", function(error, stats) {
 if (error) {
   console.log("获取文件信息失败:" + error);
 } else {
  
  console.log(stats.isFile());//是否是文件
  console.log(stats.isDirectory());//是否是目录
  console.log(stats.size);//大小
  console.log(stats.birthtime);//创建日期
  
 }
});


console.log(process.cwd());