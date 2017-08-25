'use strict';

//express是一个很受欢迎的web框架, 基于http模块进行了二次封装
var express = require('express');
var app = express();


/*
//启动脚本的app.get方法，用于指定不同的访问路径所对应的回调函数，这叫做“路由”（routing）。上面代码只指定了根目录的回调函数，因此只有一个路由记录。实际应用中，可能有多个路由记录。
app.get('/', function (req, res) {
  res.send("<h1>Hello World</h1>");
});
app.get('/mahao', function (req, res) {
  res.send("<h1>马豪</h1>");
});
app.get('/about', function (req, res) {
  res.send("<h1>About</h1>");
});
app.get('/content', function (req, res) {
  res.send("<h1>Content</h1>");
});
*/
//把路由放到一个单独的文件中，比如新建一个routmodel子目录。(就是封装了一下, 也可直接用上面的代码, 但是封装一下代码更加的易懂)
var routmodule = require('./routmodel/approtunt');
routmodule(app);

//Express框架建立在node.js内置的http模块上。http模块生成服务器的原始代码如下:
var http = require('http');

//通过http模块创建一个服务器
var httpapp = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-type': 'text/plain'
  }); //响应头的信息, 状态码以及一些信息的设置
  res.end('Hello World'); //end方法其实是一个写入流, 把内容写入到http
});
httpapp.listen(9527, "");

//通过express模块来创建一个服务器
//比较两段代码，可以看到它们非常接近。原来是用http.createServer方法新建一个app实例，现在则是用Express的构造方法，生成一个Epress实例。两者的回调函数都是相同的。Express框架等于在http模块之上，加了一个中间层。
var express = require('express');
var expressapp = express();
//通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。
//将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。(注意是目录, 而不是具体的某个文件)
expressapp.use(express.static(__dirname));
expressapp.get('/', function (req, res, next) {

  console.log("呵呵哒");
  next();
}, function (req, res) {
  console.log("日狗啊");
  res.end("this is qipa");
});
expressapp.listen(9526);
app.listen(6789);



//中间件的使用, 就是可以在一系列的请求前面加一些函数来处理请求
//中间件的顺序至关重要, 会按照顺序来依次调用中间件
//use方法是用来使用中间件的方法
var useApp = express();
//所有的请求都会走这个方法, 可以在这个方法里做一些处理, 当修改了一些信息, 又不想响应请求, 可以交给下一个中间件, 调用next方法即可, 如果next有参数, 响应就此结束
useApp.use(function (req, res, next) {
  console.log("哈哈");
  next();
});

//第一个参数为url的路径, 只有调用了该路径的请求才会调用该中间件
useApp.use('/mahao',function (req, res, next) {
  next();
});


useApp.use(function (req, res, next) {
 
  console.log(req.query);
  console.log("去求");
  //当通过各种方式响应了请求之后, 后面的中间件是不会再调用了
  res.send('<h1>Hello World</h1>');
  //res.end();
  next();
 
});

useApp.use(function(req, res, next) {
   //console.log("");
   res.send('<h1>该方法永远会被调用, 但是响应无效, 因为在上一个中间件已经响应了客户端的请求</h1>');
});
useApp.listen(9999);


/*
express会使用其来响应各种客户端请求即算入门, 后期再详细学习各种方法(每种框架其实常用的就几个,八二定律依然适用)
*/