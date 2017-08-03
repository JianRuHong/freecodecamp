'use strict';

/**
 * JS中的面向对象是基于原型的, 而不是类
 */


//1. 原始方法创建对象, 如果生成多个同样的对象就很麻烦
var dog = {};
dog.name = "小狗";
dog.color = "black";
console.log(dog);

//2. 原始方法的改进, 封装成一个函数, 其简化了原始方法创建对象的繁琐, 但是多个对象还是无法反应出其是同一类型的对象
function Dog(name, color) {
  return {
    "name": name,
    "color": color
  }
}
console.log(Dog("拉布拉多", "紫色"));


//3. 构造函数, 创建对象
/**
 * 
 * 所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上, 在方法结束时会自动返回this变量
 */

function Cat(name, color) {
  this.name = name;
  this.color = color;
}
var cat1 = new Cat("小黑", "黑色");
var cat2 = new Cat("小白", "白色");

//通过构造函数创建的对象其都会拥有一个叫做constructor的属性, 该属性指向其构造方法(函数)
console.log(cat1.constructor == cat2.constructor);
//还可以通过instanceof来判断其是否是某个构造函数创建的对象
console.log(cat1 instanceof Cat);

//通过构造函数已经非常好用了, 但是也有一个弊端, 比如, 每一个创建的对象都有几个默认的属性和方法, 其都是一样的, 如果每次创建一个对象都重新再创建这几个属性和方法, 内存浪费还是有点厉害的, 因此, 就引出了原型对象

//Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承

//构造函数
function Animal(name, color) {
  this.name = name;
  this.color = color;
}

//在其原型对象上添加属性和方法
Animal.prototype.type = "动物";
Animal.prototype.eat = function () {
  console.log("动物吃饭");
};

//通过构造函数生成对象

var animal1 = new Animal("鸵鸟", "黑色");
var animal2 = new Animal("大象", "白色");

//可以发现及时构造函数里没有该属性和方法, 依然可以访问到, 这就是原型继承
animal1.eat();
console.log(animal1.type);

//通过对比animal1和animal2的eat方法, 发现是true, 说明两个对象的该方法是相同的, 也是就同一个内存地址,而不会反复的创建该方法和属性
console.log(animal1.eat == animal2.eat);

/**
 * prototype验证
 */

//1. 这个方法用来判断，某个proptotype对象和某个实例之间的关系。
console.log(Animal.prototype.isPrototypeOf(animal1));

//2. hasOwnProperty(), 用来判断是否是某个对象自身的属性, 而不是继承过来的
console.log(animal1.hasOwnProperty("type"));

//3. in运算符, 可以判断对象手否有某个属性

console.log("type" in animal1);


/**
 * JS继承
 */





//1. 构造函数绑定

//第一种方法也是最简单的方法，使用call或apply方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行：

//如何实现下面的roobt继承person呢

//这是一构造函数
function Person() {
  this.type = "我是一个人";
}

//这是另一构造函数
function Roobt(name, age) {
  //函数都有一个apply的方法, 用来指定调用函数的对象和参数, 此时把Roobt的对象传给Person, 那么Peron内部的this就是Roobt对象, 所以就能把Person的属性和方法绑定到Roobt对象上
  Person.apply(this, arguments);
  this.name = name;
  this.age = age;
}

//可以发现, Roobt对象有了type属性
console.log((new Roobt("", "")).type);


//2.prototype模式
//在前面提到过, 每一个构造函数都有一个prototype属性, 指向一个对象, 且该对象的属性和方法都会被构造函数创建的对象继承过来, 所以只要指定了构造函数的prototype的对象, 就可以把该对象的属性和方法全部继承

function Tree() {
  this.type = "是一个树";
}

function PineTree() {
  this.detail = "是一颗松树";
}


//查看此时的constructor
console.log(PineTree.prototype.constructor);
//让PineTree的原型指向Tree的对象, 它相当于完全删除了prototype 对象原先的值，然后赋予一个新值。
PineTree.prototype = new Tree();
//
console.log(PineTree.prototype.constructor);
console.log("哈哈: " + (new PineTree()).constructor);
//上面的constructor是Tree(), 因为原型已经变成了Tree的对象
//任何一个prototype对象都有一个constructor属性，指向它的构造函数。
//下面的让其原型的构造函数指向PineTree
PineTree.prototype.constructor = PineTree;

//每一个对象都有一个constructor属性, 默认调用prototype对象的constructor属性。
console.log("哈哈: " + (new PineTree()).constructor);

//重点来了, 如果每次修改了prototype的原型对象后, 又没有修改其原型对象的constructor属性, 那么就会造成继承连的混乱(我是用构造函数PineTree创建的对象, 结果constructor确显示构造函数是Tree, 这就乱套了), 所以每次在修改了prototype的原型对象后, 务必也修改其constructor的构造函数


//class继承, 之前的原型继承, 本质就是让prototype的原型对象改变即可(注意需要修改constructor正确的指向), class继承, 是ES6新出的标准, 但js的本质还是原型继承, 只不过class继承更加的好理解, 且代码量比较少

class Gird {
  constructor(type) {
    this.type = type;
  }

  //没有function关键字
  fly() {
    console.log(this.type + "会飞!");
  }
}

//使用new关键字, 会往类里面找constructor这个构造方法, 并且把参数传过去
var gird = new Gird("小飞鸟");
gird.fly();

//class继承更加方便, 使用关键字extends即可

class SmallGird extends Gird {
  constructor(name, age, color) {
    super(name); //在constructor使用super来调用父类的构造方法
    this.age = age;
    this.color = color;
  }

  myColor() {
    console.log("我的演示是" + this.color);
  }
}


var s = new SmallGird("蜂鸟", 18, "black");

console.log(s.type);
s.myColor();

/**
 * ES6引入的class和原有的JavaScript原型继承有什么区别呢？实际上它们没有任何区别，class的作用就是让JavaScript引擎去实现原来需要我们自己编写的原型链代码。简而言之，用class的好处就是极大地简化了原型链代码。

你一定会问，class这么好用，能不能现在就用上？

现在用还早了点，因为不是所有的主流浏览器都支持ES6的class。如果一定要现在就用上，就需要一个工具把class代码转换为传统的prototype代码，可以试试Babel这个工具。
 */