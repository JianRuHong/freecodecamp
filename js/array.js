/**
 * js中的数组功能是异常的强大, 因为其可以包含任何的数据类型, 是任何的, 而不像其它一些编程语言, 数组里只可以存放对象, 局限性很大, 数组是通过下标来访问元素的
 */

//js的创建数组使用[]来包含元素, 元素与元素之间用逗号隔开, 和大多数编程语言是一致的
var myarr = [1, 3, 5, 7, 9, undefined, true, null, "呵呵"];
//1. 获取数组的长度
var arrLength = myarr.length;
console.log(`数组的长度是: ${arrLength}`);
console.log(myarr);
//注:如果直接修改数组的length属性, 会导致数组的长度发生改变
myarr.length = 100;
console.log(myarr);
//2. 修改访问数组元素的值
myarr[1] = "奇葩";
console.log(myarr);
//注:如果通过索引赋值, 下标超过了范围, 也会引起数组长度的改变
myarr[102] = "尴尬";
console.log(myarr);

//注:所以在js的编码中, 一定不要通过length来随便修改数组的大小, 可能会造成无法估量的错误, 且访问数组元素时要特别注意, 不要越界

//3. 获取元素在数组中的位置
//和字符串一致, 有了返回具体位置, 没有返回-1
var index = myarr.indexOf("10086");
var index1 = myarr.indexOf("尴尬");
console.log(index, index1);
//4. 截取数组
//获取子串使用了sustring方法, 而数组则需要通过slice方法, 然后会返回一个新的数组, 原数组不变
//(1)既没有起始位置已没有结束位置, 就会从头到尾截取数组, 就是复制
var subArr = myarr.slice();
//(2)只有起始位置, 会从起始位置截取到数组结束
var subArr1 = myarr.slice(1);
//(3)指定了起始位置和结束位置, 但截取元素不包含结束位置
var subArr2 = myarr.slice(1, 5);
//注:字符串截取和数组截取都是左闭右开截取的区间
console.log(subArr, subArr1, subArr2);
//5. 数组里添加元素, 会在末尾添加
myarr.push(10086, 1000); //可以同时添加1个活多个元素到数组, 然后该方法还会返回数组的最新长度
console.log(myarr);
//6. 数字里移除元素, 会在末尾移除
myarr.pop(); //该方法没有参数, 且调用一次就移除数组最后的一个元素, 并且返回移除的元素
//7. 与其push和pop对应的就是unshift和shift方法了,是从数组的开始位置添加和移除元素
myarr.unshift(1, 90);
myarr.shift();
//8. 数组排序
//会按照内部的排序方式排序:先把所有的元素转成字符串, 然后再做比较之后按升序排列
myarr.sort();
//注:sort方法可以自定义排序方式, 后面学习

//9. 数组翻转
//就是把数组倒序
myarr.reverse();

//10. 数组拼接
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var newArr = arr1.concat(arr2, arr3, 1, 2); //该方法可以拼接一个或多个数组或者值, 其内部会把数组的每个元素都添加到目标数组里面
console.log(newArr);

//以下两个是重头戏, 非常实用的方法
//11. 万能方法splice, 该方法是增删元素的最强方法
var finalArr = ["刘德华", "吴彦祖", "莫文蔚"];
//第一个参数是从哪个位置开始, 第二个参数是从开始的位置删除多少个元素, 剩下的就是往数组里添加的元素, 该方法会返回移除的元素的数组, 如果只添加的话, 就可以把移除元素的个数设置为0
finalArr.splice(1, 1, "齐天大圣", "孙悟空");
console.log(finalArr);

//12. join方法, 可以把数组的元素使用指定的字符串拼接起来, 返回拼接后的字符串
//这个方法在处理字符串和数组时非常的实用
var finalString = finalArr.join(",");
console.log(finalString);

//总结:Array提供了一种顺序存储一组元素的功能，并可以按索引来读写。

//小的练习题(廖雪峰每节最后练习)
/**
 * 在新生欢迎会上，你已经拿到了新同学的名单，请排序后显示：欢迎XXX，XXX，XXX和XXX同学！
 */
'use strict';
 var studentArr = ['小明', '小猪', '消音器', '猪八戒'];

 //第一种方法:逐个获取数组里的元素, 但是不适合数组里有大量元素, 会累死
 var studentString = `欢迎${studentArr[0]}, ${studentArr[1]}, ${studentArr[2]}和${studentArr[3]}`;
 console.log(studentString);
 //第二种方法:把数组除了最后一个元素全截取到一个新的数组, 然后通过join拼接成字符串, 这种适合无论多少个学生都行
 var subStudentArray = studentArr.slice(0, studentArr.length - 1);
 var subStudentString = subStudentArray.join(" ,");
 var studentString1 = `欢迎${subStudentString}和${studentArr[studentArr.length - 1]}`;
 console.log(studentString1);