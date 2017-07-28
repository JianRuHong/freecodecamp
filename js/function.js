'use strict';
/**
 * 在编程中, 把一些常用的操作封装起来成为函数, 可以更好的重复利用
 */

//定义函数

/**
 * function是定义函数的关键字
 firstFunction是函数的名字
 (a)小括号里面的是函数参数, 多个参数用逗号隔开
 {函数体}, 由语句构成, 也可以为空
 */
function firstFunction(a) {
  console.log("welocme to china !");
}

//注:请注意，函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，并将结果返回。因此，函数内部通过条件判断和循环可以实现非常复杂的逻辑。如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。(廖雪峰原文)

//函数实质上也是对象, 所以可以理解为函数名就是指向函数的变量名, 可以通过变量名来调用函数
var mySecondFucntion = function (a) {
  console.log("人生自古谁无死, 留取丹心照汗青!");
};

//调用函数
//调用函数的格式为:函数名(参数列表), 即使参数为空, 小括号也不能省略
firstFunction(1);
mySecondFucntion(2);

//其实函数在调用的时候可以传入任意个参数, 即使定义函数的时候参数名没有调用时传入的多
firstFunction();
firstFunction(1, 2, 3);

//函数内部有一个arguments关键字,此关键字只在函数内部有效果, 并且指向当前调用函数的所有参数, 使用方法类似于数组, 但是不是数组
function myThreeFunction(a) {
  for (var index = 0; index < arguments.length; index++) {
    var element = arguments[index];
    console.log(element);

  }
}

myThreeFunction(1, 2, "呵呵", true);

//之前使用数组的时候, 用到了slice方法, 其结束位置是可选的, 内部就是通过arguments来判断传入了几个参数, 如果为1个参数就为起始参数, 结束参数就会默认为数组的结尾
function myFourFunction(params) {
  if (arguments.length === 1) {
    console.log("只有一个参数");
  } else {
    console.log("不止一个参数");
  }
}
myFourFunction(1);
myFourFunction(1, 2);
//还有一种情况, 假如一个函数定义的时候有两个参数, 但是调用时传入了不止两个参数, 那么要不去除了这两个参数意外的参数就需要遍历的时候下标从二开始, 但是这种写法有点繁琐, 万一哪天需要三个参数的时候还要修改, 非常恶心, 所以ES6又引入了rest参数


//rest参数需要在形参前面写上三个点..., 这样就定义了一个rest参数
function myFiveFunction(first, second, ...other) {
  console.log(`first: ${first}`);
  console.log(`second: ${second}`);
  console.log(`ohter: ${other}`);
}

myFiveFunction("Ma", "Hao", 1, 3, true);



/**
 * 定义一个计算圆面积的函数area_of_circle()，它有两个参数：r: 表示圆的半径；pi: 表示π的值，如果不传，则默认3.14
 */
function area_of_circle(r, pi) {
  if (arguments.length === 1) {
    pi = 3.14;
  }

  return pi * r * r;
}

console.log(area_of_circle(4));

/**
 * Max是一个JavaScript新手，他写了一个max()函数，返回两个数中较大的那个
 */

function max(a, b) {
  if (a >= b)
    return a;
  return b;
}

console.log(max(10, 4));

/**
 * 变量作用域
 */

//在函数内部定义的变量叫做局部变量, 在函数外部定义的变量叫全局变量, 局部变量只有在该函数体内才能访问, 函数体外访问就会报引用错误, 全局变量, 任何函数体内内都可以访问

function innerFunction(a) {
  var innerV = "去哪";
  //js中的函数可以嵌套, 内部的函数就叫做内部函数, 外部的叫外部函数, 很简洁的叫法
  function smallFunction(v) {
    //内部函数可以访问外部函数的变量, 反之则不行
    console.log(innerV);
  }
  smallFunction();
}
innerFunction();
//console.log(innerV);ReferenceError, 如果在函数体外访问会报引用错误

//不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性

var myAll = "去你妹啊";
//是一样的
console.log(myAll);
console.log(window.myAll);

//手动修改了绑定在window上的全局变量的指向, myall是不会改变的, 还是指向的'去你妹啊'
window.myAll = "呵呵";
console.log(myAll);

//下面还有个奇葩的例子
function finalFunction() {

  //for循环是一个语句块, 其循环变量应该是只有在for循环的循环体内才可以被访问到
  for (var index = 0; index < 10086; index++) {

  }
  console.log(index); //但是在循环体外依然可以访问index
}

//这个问题就是JS历史遗留问题, 说白了就是bug, 为了解决此问题, ES6引入了关键字let, 明确的声明一个块级作用域的变量

function letFunction() {
  for (let index = 0; index < 10086; index++) {

  }
  // console.log(index); 再访问就会报引用错误
}

//另外在开发中经常碰到固定不变的变量, 叫做常量, 可以使用const关键字来定义, 只能被赋值一次, 以后再赋值就会报错
const finalConst = 10086;
//finalConst = 1000;如果再赋值会报类型错误
console.log(finalConst);

/**
 * 方法
 */

//之前说过, js的对象的属性值可以是任意类型, 当然也可以是函数(函数本质还是一个对象), 绑定在对象上的函数就叫做方法

var myobj = {
  name: "函数",
  message: "该对象绑定了一个函数",
  run: function () {
    console.log("奔跑吧兄弟" + ", 其名字是个" + this.name);
  }
};

//调用对象的方法, 和普通函数没啥区别, 但是其内部有一个this关键字, 它指向调用方法的对象, 这里是myobj这个对象
myobj.run();


//再来一种写法, 单独定义一个函数, 然后把函数绑定到对象上
function eat() {
  console.log("吃饭的是" + this.name);
}

//把上面的eat函数绑定到对象上
myobj.eat = eat;

myobj.eat(); //没毛病, name是对象的name
//eat();//问题出现, 问题错误, 并没有发现没定义的name属性, 此时的this指向的是window对象, 因为eat函数绑定到了window上, 但是在严格模式下, this指向了underfined, 会报错

/**
 * 注:所以方法的调用的this指向是不确定的, 只有明确的使用了对象.方法()的形式才能正确确定this的指向
 */

//如果又在一个方法内部定义了另一个方法, 又恰巧用到了this, 抱歉...此时的this指向又是不确定, 严格模式下又是underfined, 这是js的一个严重的bug

//还好, js提供了两个方法, 可以用来明确的支出调用者

//第一个函数本身的apply方法
eat.apply(myobj, [1, 2, 3]); //没毛病, 指向正确, 且方法的参数通过后面的数组传递
//第二个函数本身的call方法,和apply唯一的区别就是, 参数是分开传入的
eat.call(myobj, 1, 2, 3);

/**
 * 高阶函数: 函数本身上也是一个对象, 是数据类型的一种, 也可以使用变量接收, 所以函数也可以当做另一个函数的参数, 这种把函数当做参数的函数, 叫做高阶函数
 */

//1. 数组的map
//数组的map方法就是会挨个作用到数组的每个元素上, 给元素做一定的操作之后, 再返回处理后的元素, 最终形成一个新的数组, 类似于遍历了数组, 并对数组里的元素做处理之后, 把元素放在一个新的数组里,但是使用map可以简洁明了的知道, 是对数组的每个元素做处理, 并返回一个新的数组

var myMapArray = ["天", "下", "第", "一"];
//map的参数是一个函数, 该函数要有一个返回值, 并且该函数的参数就是数组的每个元素
var newMyArray = myMapArray.map(function (value) {
  console.log(value);
  return value + "王八";
});
console.log(newMyArray); //新的数组, 会给原来数组的每个元素拼接一个子字符串, 当然可以做更复杂的操作, 这里只是用例子来表明map的用法:map接受一个函数做参数, 该函数的参数是数组的元素, 然后每次都会产生一个返回值, 最终形成一个新的数组

//2. 数组的reduce
//该方法相当于一个累计方法, 会接受两个参数, 比如valu1和value2, 第一次的时候value1是数组第一个元素, value2是第二个, 当处理完之后, 返回的结果又成了value1, value2又成了数组里的下一个元素, 以此类推, 就这样累计计算, 最终返回一个结果
var newString = myMapArray.reduce(function (value1, value2) {
  return value1 + value2;
});
console.log(newString); //其实是拼接了字符串


/**
 * 利用reduce()求积
 */

function getProduct(arr) {
  return arr.reduce(function (value1, value2) {
    return value1 * value2;
  });
}

console.log(getProduct([1, 3, 5, 7, 9]));

/**
 * 想办法把一个字符串13579先变成Array——[1, 3, 5, 7, 9]，再利用reduce()就可以写出一个把字符串转换为Number的函数。练习：不要使用JavaScript内置的parseInt()函数，利用map和reduce操作实现一个string2int()函数：
 */

function string2int(s) {
  //split可以通过指定的符号来分割字符串, 如果是个空的字符, 就挨个拆分字符串
  var stringArray = s.split("");
  console.log(stringArray);
  return stringArray.map(function (value) {
    //如果不让用parseInt方法来转变数据类型, 可以巧妙的使用js的动态语言的特性(数据类型可变, 且可以多次改变, 定义时不用指定数据类型, 会根据字面量来确定其类型), 让让数组里的结果进行减0运算, js内部会自动把value的类型转换为Number类型
    return value - 0;
  }).reduce(function (x, y) {
    return x * 10 + y;
  });

}

console.log(string2int('135688'));


/**
 * 请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。
 */

 function normalName(arr){

  return arr.map(function(value){
    return value;
  });
 }

 console.log(normalName(['adam', 'LISA', 'barT']));

//测试github
//测试