'use strict';
var obj = require("./nodeHelloWorld");
var name = "刘德华";
obj.greet(name);

//引入一个模块, 路径要正确, 文件名就是模块的名字, 不需要后缀
var hello = require("./hello");
hello.run();
hello.eat();


/*
//node实现JS模块的一个简单原理, 其实主要使用到的就是闭包(这样再JS文件中的参数就成了匿名函数内部的参数, 变成了局部变量, 所以和其他模块就不会产生冲突了), 把每个JS文件的内容放在一个自调用的匿名函数中, 每一个JS文件都会有一个唯一的model全局对象, 通过函数把这个全局当做参数传递, 在函数里面来修改全局变量
var mymodule = {
    id: 'hello',
    exports: {}
  };
(function () {
  var say = "hello";
  var name = "猪八戒";
  
  var load = function (module) {
    function greet(name) {
      console.log("Hello" + "," + name + "!");
    };
    module.exports = greet;
    return module.exports;
  }
  var exported = load(mymodule);
  mymodule.exports = exported;
  console.log(mymodule.exports);
})();
*/