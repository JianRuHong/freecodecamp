/**
 * Map和Set是ES6新引入的数据类型
 * 为什么要引入Map?
 * 因为: js的对象的键只能是字符串, 但是考虑到有很多开发者觉得其他类型的数据作为键也是合乎情理的, 但是为了保证原有js库的完整性, 没有改变原有对象的定义, 就新增了Map的数据类型
 * Set和OC中的NSSet类似, 是为了剔除重复元素
 */

 //创建一个Map对象
 
 //初始化一个Map对象需要传一个二维数组, 也可以为空
 var myMap = new Map([["齐天大圣", "孙悟空"], ["天蓬元帅", "猪八戒"]]);

 //添加新的键值对, 如果对存在的key进行set设置, 会替换原来的值
 myMap.set("唐三藏", "陈选中");
 //是否存在某个键
 console.log(myMap.has("齐天大圣"));
 //获取值
 console.log(myMap.get("齐天大圣"));
 //删除键值对
 myMap.delete("齐天大圣");
 console.log(myMap);
 

 //总结:其实大多数情况下Map都可以被js的对象来替代, 因为对象的使用频率更加的高, 所以选用

 //iterable类: 之前提到过遍历一个数组或者对象只能通过for循环或者for..in循环, 但是在最新的ES6标准提出了iterable(可迭代的)类型, Array, Map, Set都属于该类, 添加了新的遍历方法for..of, 遍历出来的直接就是值, 而不是for..in遍历出来的键, 不过常用的还是foreach方法, 其更加的灵活强大

 var arr = [1, 2, 3, 4, 5];
 //第一种遍历
 for (var index = 0; index < arr.length; index++) {
   var element = arr[index];
   console.log(element);
 }

 //第二种遍历(此处得到的key是字符串)
 for (var key in arr) {
   if (arr.hasOwnProperty(key)) {
     var element = arr[key];
     console.log(element);
   }
 }

 //第三种遍历
 arr.forEach(function(element, index, arr){
  console.log(`${index}:${element}`);
 });

 //第四种遍历
 for(var value of arr){
   console.log(value);
 }

 //大多数场景都需要使用foreach或者for循环, 因为可以操作数组下标
 