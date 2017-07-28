/**
 * closure(闭包), 是js的一大难点, 也是其特色(如OC中的block(块), 也是其特色, 对初学者也是不好理解)
 * 
 */

//前面学习变量作用域时说过, 函数外部无法访问函数内部的变量
function firstFunction(value) {
  var innerV = "哈哈";
}
//console.log(innerV); 无法访问函数内部的变量, 引用错误

//在学习函数的函数说过, 函数是可以嵌套的, 且内部函数可以访问外部函数的所有变量

function outerFunction() {

  var outerV = "玩具总动员";

  function innerFunction() {

    console.log(outerV); //可以访问外部函数的变量, 反之则不行(js中的链式作用域, 子对象会一级一级地向上寻找所有父对象的变量)
  }
  //现在如果一定要在函数外部访问函数内部的变量, 是访问, 而不是直接返回, 从上面知道了内部函数可以访问外部函数的值, 因此, 可以把内部函数当做外部函数的返回值, 通过调用内部函数的方法访问外部函数内的变量
  return innerFunction;
}

//外部函数的返回值是一个函数名, 需要调用, 其实此时的内部函数innerFunction, 就是传说中的闭包
outerFunction()();

/**
 * 借用阮一峰的文章给闭包下一个简洁的定义(因为参考了廖雪峰的文章, 觉得解释的不好):闭包就是能够读取其他函数内部变量的函数。由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
 */

//闭包的主要作用:第一个是读取函数内部的变量, 上边已经提到过了; 第二个, 就是函数被调用后, 让其值不会被回收, 可以一直存在内存中

function alwayIn(value) {
  var innerV = 66;

  function innerF() {
    innerV++;
  }

  function getF() {
    return innerV;
  }

  return [innerF, getF]; //返回一个包含两个函数的数组

}

var reslut = alwayIn(); //返回了一个函数组, 被一个全局变量引用了,因此两个内部函数不能释放, 但是两个内部函数又依赖于外部函数, 所以也没有释放, 外部函数内的变量就这样一直存在了内存中
reslut[0]();
console.log(reslut[1]()); //原来的66变成了67, 说明, 值没有被释放

//总结:通过闭包可以访问函数内的变量, 通常, 函数调用完以后, 内存就会被回收, 但是通过闭包, 可以让函数常驻内存中.
　

//问题1
var name = "The Window";　　
var object = {　　　　
  name: "My Object",
  getNameFunc: function () {　　　　　　
    return function () {　　　　　　　　
      return this.name;　　　　　　
    };　　　　
  }　　
};
console.log(object.getNameFunc()()); //打印的是The Window, 因为对象的getNameFunc方法返回的是一个函数, 该函数又被绑定在了全局变量上, 所以函数内部的this是window


//问题2
var name = "The Window";　　
var object = {　　　　
  name: "My Object",
  　getNameFunc: function () {　　　　　　
    var that = this;　　　　　　
    return function () {　　　　　　　　
      return that.name;　　　　　　
    };　　　　
  }　　
};　　
console.log(object.getNameFunc()());//在　getNameFunc函数中的this是object本身, 通过that指向this, 可以保存该对象, 在内部函数里依然可以访问外部函数的变量