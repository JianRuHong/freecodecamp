/**
 * 浏览器对象模型(Browser Object Model), 通过JS可以获取浏览器提供的很多信息
 */

 //window, 表示浏览器窗口

 //1. 获取浏览器窗口可显示网页部分的宽高
 console.log(window.innerHeight, window.innerWidth);
 //2. 获取当前页面的URL信息
 console.log(window.location);
 //3. 获取屏幕信息
 console.log(window.screen);
 //4. 获取浏览器的信息
 console.log(window.navigator);
 //5. 获取当前页面, document对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点。
 console.log(window.document);