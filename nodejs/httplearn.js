'use strict';
var http = require('http'); //内置的http模块, 用来处理http请求
var url = require('url'); //内置的url模块, 用来处理url的信息
var fs = require("fs"); //内置的文件模块, 用来处理文件的读写, 以及获取文件的一些信息
var path = require("path"); //内置的路径模块, 用来处理本地目录的一个模块, 如拼接路径等



/*
要开发HTTP服务器程序，从头处理TCP连接，解析HTTP是不现实的。这些工作实际上已经由Node.js自带的http模块完成了。应用程序并不直接和HTTP协议打交道，而是操作http模块提供的request和response对象。
request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；
response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器。
*/

//使用http模块创建一个http服务器, 并传入一个回调函数, 回调函数的第一个参数是请求对象, 第二个是服务器响应的对象
var server = http.createServer(function (request, response) {
  //可以获得请求的方式和请求的url
  console.log(request.method + ':' + request.url);
  console.log(url.parse(request.url));
  //把状态, 和一些参数, 写入到响应头
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  //将HTTP响应的HTML内容写入response
  response.end('<h1>Hello China !</h1>');
});

//监听9999端口, 端口是用来区分进程的, 一台电脑可能同时运行了多个程序, 每个程序都有一个进程, 使用端口来标记进程, 可以方便的获取某个进程
server.listen(9999);
console.log("服务器已经启动");


//文件服务器
/*
我们可以设定一个目录，然后让Web程序变成一个文件服务器。要实现这一点，我们只需要解析request.url中的路径，然后在本地找到对应的文件，把文件内容发送出去就可以了。
*/



//这个是文件服务器的一个例子, 用户通过浏览器访问服务器上的某个文件, 如html文件, json文件等
var server1 = http.createServer(function (request, response) {
  //获取请求的url
  var requrl = request.url;
  console.log(requrl);
  //解析url获取其路径, 类似于/html/kiss/inde.html这样的格式
  var urlpath = url.parse(requrl).pathname;
  console.log(urlpath);
  //获取当前所在的目录
  var curDic = path.resolve(".");
  console.log(curDic);
  //组合完整的文件路径
  var filePath = path.join(curDic, urlpath);
  console.log(filePath);
  //通过文件模块可以获取文件或者文件夹是否存在, 以及存在的文件的信息
  fs.stat(filePath, function (error, stats) {
    if (error || stats.isDirectory) {
      console.log(error);
      //未找到文件
      response.writeHead(404);
      response.end("404 not find file");
    } else {
      console.log(stats);
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      //没有必要手动读取文件内容。由于response对象本身是一个Writable Stream，直接用pipe()方法就实现了自动读取文件内容并输出到HTTP响应。
      fs.createReadStream(filePath).pipe(response);

      //fs.createReadStream(filePath).pipe(response);
    }
  });


});

server1.listen(9527);