'use strict';

/*
AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。
AJAX 不是新的编程语言，而是一种使用现有标准的新方法。
AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。
AJAX 不需要任何浏览器插件，但需要用户允许JavaScript在浏览器上执行。
 */

//XMLHttpRequest 是 AJAX 的基础。
//XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
//1. 创建XMLHttpRequest对象
var request = new XMLHttpRequest();

//如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法

//2. 发送请求
//open方法规定了请求的类型(Get或者Post), 请求的地址, 同步还是异步
request.open('get', 'http://weixin.jirengu.com/weather', true);
//send方法就是往服务器请求数据, 求有一个参数, 就是往服务器请求时所带的参数, post请求是用
request.send();
//服务器会返回内容, 可以用responseText和responseXML两种来接受, 不是xml类型的数据全部使用responseText来接收(一般为json数据格式)

//当请求的状态发生改变时就会触发onreadystatechange的事件, readyState存储了请求的状态
/*
readyState: 0-请求为初始化, 1-服务器建立连接, 2-请求已被服务器接收,3-请求处理中,4-请求已完成，且响应已就绪
status:200-请求成功, 其他是请求失败
*/
request.onreadystatechange = function () {
  if (request.status == 200 && request.readyState == 4) {
    console.log(request.responseText);
  }
};


//跨域请求的问题

/*
默认情况下，JavaScript在发送AJAX请求时，URL的域名必须和当前页面完全一致。
完全一致的意思是，域名要相同（www.example.com和example.com不同），协议要相同（http和https不同），端口号要相同（默认是:80端口，它和:8080就不同）。有的浏览器口子松一点，允许端口不同，大多数浏览器都会严格遵守这个限制。
*/

//目前阶段常用的跨域请求的解决办法
//1. 通过架设一个同源服务器, 在服务器端请求其它源的数据(服务器端是没有浏览器的限制的), 这个方法需要服务端配合
//2. JSONP的方式来获取, 这种方式跨域实际上是利用了浏览器允许跨域引用JavaScript资源, 但是局限在于只能使用Get请求, 且返回的是一个JS函数

//实例如下
function refreshPrice(data) {
  console.log(data);
}


function getPrice() {
  var
    js = document.createElement('script'),
    head = document.getElementsByTagName('head')[0];
  js.src = 'http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice';
  head.appendChild(js);
}
getPrice();

//3. CORS, CORS全称Cross-Origin Resource Sharing，是HTML5规范定义的如何跨域访问资源。
//Origin表示本域，也就是浏览器当前页面的域。当JavaScript向外域（如sina.com）发起请求后，浏览器收到响应后，首先检查Access-Control-Allow-Origin是否包含本域，如果是，则此次跨域请求成功，如果不是，则请求失败，JavaScript将无法获取到响应的任何数据。



//这个promise对象跟OC中的代理很相似, 无论是否调用, 实现方法都在后面then里写了, 错误捕获可以放在catch里面

//创建一个promise对象, 其参数是一个函数, 该函数又有两个参数都是函数, 第一个为成功时调用, 第二个为失败是调用
//当promise对象创建后就会执行其函数参数内部的代码
//失败时, 调用reject, 成功时调用resolve
var myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject();
  }, 1000);
});

//这里的then方法就可以捕获到promise代码里执行的结果, 参数为两个, 都是函数, 一个捕获成功的, 一个捕获失败, 当然捕获失败的函数可以不需要, 使用catch方法可以捕获所有的错误
//then和catch返回的还是promise对象, 所以可以使用链式编程, 代码看起来及其的简洁
myPromise.then(function (value) {
  console.log("哈哈");
}).catch(function () {
  console.log("失败了");
});

/**
 * 所以promise对象看起来更像是OC中的代理
 */
