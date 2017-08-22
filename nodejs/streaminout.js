'use strict';

var fileSystem = require('fs');
//读取流, 用来从文件中读取数据
//data事件表示流的数据已经可以读取了，end事件表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。
var readStream = fileSystem.createReadStream('./readText.txt', 'utf-8');
readStream.on('data', function (data) {
  console.log(data);//要注意，data事件可能会有多次, 每次都输多去数据的一部分
});

readStream.on('end', function () {
  console.log("结束");
});

readStream.on('error', function (error) {
  console.log(error);
});

//写入流, 用来向文件里写入数据
//要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束
var writeStream = fileSystem.createWriteStream("./readText.txt",'utf-8');
writeStream.write("这是第一次使用流这种抽象的数据结构来向文件写入数据");
writeStream.end();
//所有可以读取数据的流都继承自stream.Readable，所有可以写入的流都继承自stream.Writable。

//这个方法是把一个读取流和写入流链接在一起, 所有的数据自动从Readable流进入Writable流，这种操作叫pipe。
//readStream.pipe(writeStream);