/**
 * 在js中的字符串, 使用单引号或者双引号来表示
 */
"哈哈"; //普通字符串
"\u6587"; //unicode字符, 使用\u开头跟上四位数的十六进制数字

//如果字符串中也包含引号, 就需要通过转义字符了, 有很多的转义字符, 常用的有\n换行, \\表示一个\
'\'哈哈\''; //因为和表示字符串的引号冲突了, 所以用\转义, 其字符串的内容是'哈哈'
console.log("哈哈\n哈哈\n"); //换行

/**
 * 多行字符串
 */
//当有成百上千个换行还一个一个的去插入\n是异常痛苦的, 不过好在ES6(js的最新标准)添加了新的多行表示方式``, 使用两个反引号包好要表示的文本, 该格式会保留用户的键盘输入方式
console.log(`欢迎
来到
中国`);

/**
 * 模板字符串
 */

//在js中如果要拼接多个字符串, 只需要通过加号连接即可

var country = '中国';
var area = '亚洲';
var squre = '960万';
//拼接上面的字符串
var content = country + '位于' + area + ",面积达到" + squre + "平方公里!";
console.log(content);
//发现上面的方法也是可以的, 但是如果变量非常多的时候, 再这样使用+号连接..基本就GG了, 大量变量需要连接的时候, 一般就使用模板字符串了
//使用${变量}包裹要插入的变量, 其实我更习惯称之为字符串插值(swift那边是这样叫的)
content = `${country}位于${area},面积达到${squre}平方公里!`;
console.log(content);
/**
 * 字符串的一些基本操作
 */

var message = "Hello, China !";
//1. 获取字符串的长度
console.log(`字符串的长度为:${message.length}`);
//2. 获取字符串上某个位置的字符, 用法和数组类似, 使用下标访问, 下标也是从0开始
console.log(`字符串第6个位置的字符为:${message[5]}`);
//注意: 字符串是不可变的, 即使通过下表修改了某个位置的字符也是毫无效果的
message[0] = 'C';
console.log(message); //没有任何变化

//因为字符串是不可变的, 所以字符串的一些常用操作都会返回一个新的字符串, 原来的字符串不会改变
//3. 把字符串全部改为大写
var upperMessage = message.toUpperCase();
console.log(upperMessage);
//4. 把夫妇穿全部改为小写
var lowerMessage = message.toLowerCase();
console.log(lowerMessage);
//5. 获取指定字符串在目标字符串中出现的位置
var index = lowerMessage.indexOf(',');
var index1 = lowerMessage.indexOf("kiss");
console.log(index);
console.log(index1); //如果没有找到位置就会返回-1
//6. 获取目标字符串指定区域的子字符串,第一个参数为开始位置(包括), 第二个参数为结束位置(不包括)(可选, 如果没有就是开始位置到目标字符串的结束位置,), 
var subMessage = lowerMessage.substring(2, 6);
console.log(subMessage);

//以上是字符串的一些最长用到的方法, 在后面学习过程中还有其它一些方法要学习