/**
DOM的定义, 就是让网页可以使用编程语言来操作, 比如曾删改查网页元素, 我在查看阮一峰和MDN的教程时,发现了对DOM很好的定义:
DOM是JavaScript操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个JavaScript对象，从而可以用脚本进行各种操作（比如增删内容）。

浏览器会根据DOM模型，将结构化文档（比如HTML和XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。所以，DOM可以理解成网页的编程接口。DOM有自己的国际标准，目前的通用版本是DOM 3，下一代版本DOM 4正在拟定中。

严格地说，DOM不属于JavaScript，但是操作DOM是JavaScript最常见的任务，而JavaScript也是最常用于DOM操作的语言。(以上来自廖雪峰的解释, DOM就是网页的编程接口, 这样可以方便的操作网页内容)



文档对象模型 (DOM) 是HTML和XML文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来。

一个web页面是一个文档。这个文档可以在浏览器窗口或作为HTML源码显示出来。但上述两个情况中都是同一份文档。文档对象模型（DOM）提供了对同一份文档的另一种表现，存储和操作的方式。 DOM是web页面的完全的面向对象表述，它能够使用如 JavaScript等脚本语言进行修改。(以上来自MDN, 表述的定义和阮一峰一致, 就是可以通过DOM来操作网页, DOM不是JS的一部分, 只是一个编程接口, 也可以被其他编程语言使用).

//1. DOM是由一系列的节点组成的树状结构
//2. 在JS中常说获取某个元素, 其本质是获取某个元素对应的节点, 但是因为节点和元素一一对应, 所以常说为元素, 是等价的
//3. document是整个文档的根节点, 使用id, class或者标签获取子节点时, 都需要通过根节点来获取, 这样才能表明是查找了整个文档来获取指定的元素(节点)



 */


//使用JS来操作HTML元素的第一步就是需要获取到要被操作的元素, 一般有一下几种方式

//1. 通过id查找HTML元素
'use strict';
var btn = document.getElementById("myButton");
console.log(btn);

//2. 通过类名获取(返回的是一个包含元素的数组)
var btn1 = document.getElementsByClassName("btn");
console.log(btn1);

//3. 通过标签获取(返回的同样是一个包含元素的数组)

var btn2 = document.getElementsByTagName("button");
console.log(btn2);

/**
 * 修改HTML的输出流
 */
//注意:wirte方法就相当于文件的读写, 如果往页面写内容, 会覆盖掉之前的内容, 所以一定要注意不能在文档加载结束后调用该方法
//document.write('<h1>哈哈</h1>');


/**
 * 改变HTML的内容
 */
//1. 最常用的方法就是使用innerHTML属性, 不仅可以修改文本节点, 还可以直接修改元素节点
document.getElementById("myButton").innerHTML = "真假美猴王";
//2. innerText或者textContent只是用来修改文本, 可以保证无法设置HTML标签(比如出现了<html>标签, 会编码为字符编码)
document.getElementById("myButton").innerText = "危险按钮";
/**
 * 改变HTML属性
 */
//通过element.attribute的形式, 其值应该保证是字符串
//document.getElementById("myButton").disabled = "disabled";

/**
改变CSS样式, 修改CSS也是经常需要的操作。DOM节点的style属性对应所有的CSS，可以直接获取或设置。因为CSS允许font-size这样的名称，但它并非JavaScript有效的属性名，所以需要在JavaScript中改写为驼峰式命名fontSize
 */

//通过DOM, 可以修改HTML元素的样式
//格式: document.getElementById(id).style.property=新样式, 同样要保证值是字符串
document.getElementById("myButton").style.color = "blue";

/**
 * 练习
 */

// 获取<p>javascript</p>节点:
var js = document.getElementById("test-js");
// 修改文本为JavaScript:
js.innerText = "JavaScript";
// 修改CSS为: color: #ff0000, font-weight: bold
js.style.color = "#ff0000";
js.style.fontWeight = "bold";


/**
 * DOM处理HTML事件
 */

//如何给元素绑定一个事件
//1. HTML事件属性
function changeColor() {
  document.getElementById("myButton").style.color = "black";
}
//2. 使用DOM来给标签绑定方法
document.getElementById("myButton").ondblclick = function () {
  this.style.color = "cyan";
};

//常见事件

//1. onload和onunload, onload表示文档加载完毕事件, onunload表示离开文档页面时触发
//2. onchange表示,元素发生内容发生改变时的事件, 常用于验证用户的输入
document.getElementById("nameInput").onchange = function () {
  console.log("内容发生了改变");
};
//3. onmouseover和onmouseout标书鼠标移到元素上, 和移除元素的事件
document.getElementById("myMouseDiv").onmouseover = function () {
  this.innerText = "Hello World";
};
document.getElementById("myMouseDiv").onmouseout = function () {
  this.innerText = "";
};

//4. onmousedown、onmouseup 以及 onclick 事件构成了鼠标的点击事件

/**
 * 事件句柄, 类似于OC中的观察者, 可以观察一个对象(元素)的行为或者说是事件
 */

/*
 addEventListener() 方法用于向指定元素添加事件句柄。
addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。
你可以向一个元素添加多个事件句柄。
你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。
你可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。
addEventListener() 方法可以更简单的控制事件（冒泡与捕获）。
当你使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。
你可以使用 removeEventListener() 方法来移除事件的监听。
  */

//可以为同一个节点添加多个相同的事件, 且不是覆盖, 是共存的
//第一个参数是事件的类型 (如 "click" 或 "mousedown").第二个参数是事件触发后调用的函数。第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。 

/*
 事件传递有两种方式：冒泡与捕获。
事件传递定义了元素事件触发的顺序。 如果你将 <p> 元素插入到 <div> 元素中，用户点击 <p> 元素, 哪个元素的 "click" 事件先被触发呢？
在 冒泡 中，内部元素的事件会先被触发，然后再触发外部元素，即： <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。
在 捕获 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。

说白了就是冒泡跟OC中的响应者链类似, 而捕获是冒泡的相反
 */
document.getElementById("myMouseDiv").addEventListener("click", function () {
  console.log("已经点击了我");
});
document.getElementById("myMouseDiv").addEventListener("click", function () {
  console.log("又点击了我");
});

//removeEventListener来移除事件句柄, 第一个参数是事件, 第二个参数是事件对应的方法

/**
 * 增删改查节点(元素)
 */

//1. 创建一个新的元素
//如需向 HTML DOM 添加新元素，您必须首先创建该元素（元素节点），然后向一个已存在的元素追加该元素。


//创建一个p标签
var myp = document.createElement("p");
//给p标签设置文字
myp.innerText = "Hello World";
//给p标签设置样式
myp.style.color = "red";
myp.style.backgroundColor = "orange";
//把新创建的标签拼接到指定元素的后面(是成为了指定元素的子元素)
document.getElementsByTagName("body")[0].appendChild(myp);

//2. 删除一个已有的元素
//如果删除一个元素, 需要知道该元素的父元素, 通过父元素来移除要删除的元素


//获取要移除的元素
var remov = document.getElementById("myMouseDiv");
//获取要移除元素的父元素, 通过parentElement属性可以方便的得到一个元素的父元素
var par = remov.parentElement;
//移除指定的元素
par.removeChild(remov);