'use strict';
//服务器程序一般都要有这几个功能:响应网络请求, 读写文件(操作数据库), 处理二进制数据等
//NodeJS提供了这些功能的基础模块, 其底层是使用C/C++写的, 因此浏览器中是无法使用的

//global和浏览器中window对象一项, 都是全局唯一的对象
console.log(global.process);//返回NodeJS的进程
console.log(global.console);
console.log(global.process.cwd());//当前工作目录
console.log(global.process.platform);//工作的平台


//下一次的事件循环
process.nextTick(function(){
  console.log("下一次的事件循环开始了");
});

for (var index = 0; index < 10000; index++) {
  console.log(index);
}

//NodeJS本身的事件会通过进程process来处理
//Node.js不断执行响应事件的JavaScript函数，直到没有任何响应事件的函数可以执行时，Node.js就退出了。
process.on('exit', function () {
   console.log("程序退出");
});





//有些JS代码在浏览器和NodeJS里面都可以运行, 可以通过判断是否拥有某个全局变量来区分
//typeof用来检查某个对象的类型, 如果未定义就会返回undefined, 不管任何类型, 返回的都是字符串, 切记, 返回的类型是字符串(http://blog.csdn.net/z18842589113/article/details/53315910)
console.log(typeof(window));
if(typeof(window) === 'undefined'){
  console.log("NodeJS环境");
}else{
 console.log("浏览器环境");
}

