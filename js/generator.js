/**
 * generator（生成器）是ES6标准引入的新的数据类型.一个generator看上去像一个函数，但可以返回多次。(普通的函数只可以返回一次)
 */

//其定义语法就是在function后面加一个星号
function normalFunction() {
  console.log("普通的函数");
}

function* myGeneratorFunction() {
  yield 1;
  console.log("生成器");
  yield 2;
  return 3;
}

normalFunction();
var ge = myGeneratorFunction(); //并没有执行, 只是生成了一个迭代器, 使用next()方法执行, 碰到yield就暂停
/**
 * next()方法会执行generator的代码，然后，每次遇到yield x;就返回一个对象{value: x, done: true/false}，然后“暂停”。返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。如果done为true，则value就是return的返回值。
 */
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());

//普通函数无法记住状态, 但是生成器可以记住状态, 然后接着上次执行到的地方往下执行, 知道碰到return为止

/**
 * generator学习的比较肤浅, 学完ajax会回头重新学习
 */


//要生成一个自增的ID，可以编写一个next_id()函数. 由于函数无法保存状态，故需要一个全局变量current_id来保存数字。不用闭包，试用generator改写


function* next_id() {
  for (var index = 0; index < 100; index++) {
    yield index;
  }
}

var g = next_id();
for (var index = 0; index < 100; index++) {

  console.log(g.next());
}
