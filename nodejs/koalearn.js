'use strict';
var e = require('express');
var app = e();
app.get('/', function (request, response) {
  console.log(request);
  console.log(response);
  response.send("Hello!!!");
});
app.get('/mahao', function (request, response) {
  response.sendfile('/Users/shuziguoxue/Desktop/freecodecamplearn/html/boostraplearn.html');
  //response.writeHead(404);

  console.log("被访问了");
});
app.listen(3000, function () {
  console.log("运行了");
});


//Promise的使用方法, 异步编程的一个主要手段
function test(resolve, reject) {
  console.log("执行了");
  setTimeout(function() {
    resolve(10086);
  }, 5000);
}

var promi = new Promise(test);
promi.then(function(data) {
  console.log("这是:" + data);
}).catch(function(error) {
  console.log(error);
})


function f1() {
   return new Promise(function(resolve, reject) {
      console.log("第一步");
       setTimeout(resolve, 1000);
   });
}


function f2() {
   return new Promise(function(resolve, reject) {
      console.log("第二步");
      setTimeout(resolve, 1000);
   });
}

function f3() {
   return new Promise(function(resolve, reject) {
      console.log("第三步");
      setTimeout(resolve, 1000);
   });
}
var p = new Promise(function (resolve, reject) {
  console.log("开始了");
  resolve(123);
});

p.then(f1).then(f2).then(f3);