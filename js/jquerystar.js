'use strict';
/**
 * jQuery是一个简洁, 高效的 JavaScript 工具库, 它提供的 API 易于使用且兼容众多浏览器，这让诸如 HTML 文档遍历和操作、事件处理、动画和 Ajax 操作更加简单
 * 
 * 特点:
 * 1.消除浏览器差异
 * 2.简化DOM操作(包括时间处理, 节点的增删改查等)
 * 3.简化Ajax操作
 * 4.动画操作加简单
 */

//jQuery 语法是通过选取 HTML 元素，并对选取的元素执行某些操作。
//$(selector).action()
//$是著名的jQuery符号。实际上，jQuery把所有功能全部封装在一个全局变量jQuery中，而$也是一个合法的变量名，它是变量jQuery的别名
//$本质上就是一个函数，但是函数也是对象，于是$除了可以直接调用外，也可以有很多其他属性。
console.log(window.jQuery === window.$);
console.log(typeof ($));

/**
 * 选择器
 */

//在未学习jquery之前, 通过DOM可以获取元素
var mydiv = document.getElementById("myDiv");
mydiv.style.backgroundColor = "blue";
//如果通过jquery的选择器, 可以更简单的获取到文档的指定元素
//jQuery, 按id查找

//返回的是jQuery对象, jQuery对象类似数组(但是不是数组)，它的每个元素都是一个引用了DOM节点的对象。
var mydiv1 = $("#myDiv");
console.log(Array.isArray(mydiv1));

//如果查找的元素不存在, 也不会返回null, 会返回一个空的[]
console.log($(".my"));

//jQuery对象和DOM对象转换
//jQuery对象
var mydiv2 = $("#myDiv");
//jQuery对象到DOM对象
var mydiv3 = mydiv2.get(0); //或者mydiv2[0]也可以获取, 但是jQuery不是数组
console.log(mydiv3);
//DOM对象到jQuery对象
var mydiv4 = $(mydiv3);
console.log(mydiv4);
/**
通常情况下你不需要获取DOM对象，直接使用jQuery对象更加方便。如果你拿到了一个DOM对象，那可以简单地调用$(aDomObject)把它变成jQuery对象，这样就可以方便地使用jQuery的API了。
 */
//按tag查找
var mydiv5 = $("div");
console.log(mydiv5);
//按class查找
var mydiv6 = $(".div");
console.log(mydiv6);
//组合查找
console.log($("div.div"));
//多项查找
console.log($("div, body"));
//jQuery的选择器语法跟css的原则器大致一致, 所以使用更加的方便, 可以把css选择器的语法使用到jquery里面


//查找
//当获取一个jquery对象后, 可以通过find来查找指定的对象
console.log($("body, div").find("#myDiv"));

//过滤(不常用), 和js的数组过滤方法一致
$("body, div").find("#myDiv").filter(function () {
  return true;
})


/**
 * 操作DOM
 */

//修改HTML和Text
var mydiv7 = $("#myDiv");
//修改文本, 有参数
mydiv7.text("哈哈");
//获取文本, 无参数
console.log($("#myDiv").text());
//修改标签
mydiv7.html("<p>去求吧</p>");
//获取标签
console.log(mydiv7.html());
//修改css(此处的属性名, 可以使用驼峰法, 或者-链接)
mydiv7.css("background-color", "orange").css("color", "white");
/**
 * jQuery对象的所有方法都返回一个jQuery对象（可能是新的也可能是自身），这样我们可以进行链式调用，非常方便。
 */

//给对象添加一个类
$("#myDiv").addClass("welcome");
//元素是否有某一个类
console.log($("#myDiv").hasClass("welcome"));
//元素显示
//$("#myDiv").show();
//元素隐藏
//$("#myDiv").hide();
//获取元素尺寸
console.log($("#myDiv").width());
//设置元素尺寸
$("#myDiv").width("400px");
//获取属性和设置属性
//$("#myDiv").attr("", value);
//获取表单的值
//$("input").val();

/**
 * 修改DOM结构
 */

//通过原生API来修改DOM结构, 代码量大, 而且兼容性差, 使用jquery可以方便的解决这些痛苦


//添加DOM
//在被选元素结尾插入内容(成为子元素)
$("#myDiv").append('<p>谁怕谁</p>');
//在被选元素之后插入内容(成为同级元素)
$("#myDiv").after('<p>谁怕谁</p>');

//删除DOM
//要删除DOM节点，拿到jQuery对象后直接调用remove()方法就可以了
//$("#myDiv").remove();

//事件通过on()函数 第一个参数是事件类型, 第个参数是触发的事件函数
$("#myDiv").on("mousemove", function (e) {
  console.log(e.pageX);
});


/**
 * jq处理Ajax
 */

$.get("http://weixin.jirengu.com/weather", null,
  function (data, textStatus, jqXHR) {
    //data是js对象
    console.log(JSON.stringify(data));
  }
);

//使用jsonp时, 使用getjson更加简单, 直接调用即可
$.getJSON("http://weixin.jirengu.com/weather", null,
  function (data, textStatus, jqXHR) {
    console.log(data); //js对象
  }
);

$.ajax("http://weixin.jirengu.com/weather", {
  type: "get",
  data: "data",
  dataType: "dataType",
  success: function (response) {
    console.log(response); //JSON字符串
  }
});