'use strict';
var say = "Hello";
function greet(name) {
  console.log(say + "," + name + "!");
}

function hello(name) {
  console.log("hello" + name + "!");
}
//module.exports可以到处任意类型的数据类型, 取决于用户, 在引入的时候也要注意引入的是什么类型的数据, 然后进行正确的操作
module.exports = {
  greet:greet,
  hello:hello
};

/*
等同于上边
exports = hello;
exports = greet;
*/


/*

//这里解释了exports和module.exports的不同, 所以强烈建议使用module.exports的形式来输出对象
//(推荐链接)http://www.cnblogs.com/pigtail/archive/2013/01/14/2859555.html
var dic = {};
var dic1 = dic; //指向了dic这个js对象(指向的是dic的地址)
dic.name = "哈哈"; //dic的地址没有改变, 只是改变了其内部的属性, 所以此时dic1和dic还是相等的
console.log(dic);
console.log(dic1);
dic = {
  age: 10
}; //直接改变了dic的指向, 但是此时的dic1指向的还是dic之前的对象
console.log(dic);
console.log(dic1);
*/