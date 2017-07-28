/**
 * js的对象就相当于其他编程语言中的字典, 是一个无序的键值对集合, 也是集合数据类型(属于数据结构)
 */

//js用{}来表示一个对象, 键值对为键:值的形式, 键值对之间用逗号隔开, 最后一个键值对后面不需要加逗号, 和大多数编程语言的字典描述方式是一致的, 在js中键值对叫做对象的属性或者方法

//创建了一个对象, 并且把对象赋值给变量dog, 方便使用
var dog = {
  name: "旺财",
  age: 3,
  weight: "20kg",
  speed: 100,
  'small-fei': "汪汪汪"
};

//访问一个对象的属性使用点语法, 但是如果访问的属性名包含了一些特殊符号, 那么就不能通过点语法了, 需要使用对象[键值]的形式
console.log(dog.name);
console.log(dog['small-fei']); //已经不能通过点语法进行访问了, 所以对象的属性名最好用单个字符串
console.log(dog.chain); //访问一个对象不存在的属性, 不会报错, 返回underfined
//注:对象的所有键值都是字符串, 但是定义对象的时候不强制要求在属性名上加引号, 属性值可以是任何类型

//由于js是动态类型的语言(可以给变量随便切换类型或者改变其值), 可以在定义一个对象后, 随便的添加属性或者删除属性

dog.wife = "哈士奇"; //增加一个属性
console.log(dog.wife);

delete dog['small-fei']; //使用delete关键字, 删除一个对象的属性
console.log(dog['small-fei']);

//查看属性是否在某个对象里面
var result = 'name' in dog;
var result1 = 'chiji' in dog;
var result2 = 'toString' in dog; //会返回true, 因为toString定义在object对象中，而所有对象最终都会在原型链上指向object，所以xiaoming也拥有toString属性。
var result3 = dog.hasOwnProperty('toString'); //判断对象本身又没有某个属性用该方法hasOwnProperty
console.log(result, result1, result2, result3);

//后续的条件判断if..else不再看了, 实在是跟其他的编程语言一样; 循环也不再看了, 也是一致的, 不过在js中有for(var key in 对象或者数组(数组也是对象的一种)), 遍历出来的是key, 属性名, 特别注意一下


/**
 * 标准对象
 */

//请注意:在JS中, 一切皆对象, 可以通过typeof来获取数据的类型
console.log(typeof 123); //nsnumber类型
console.log(typeof '123'); //string类型
console.log(typeof true); //boolean类型
console.log(typeof [1, 2]); //object类型
console.log(typeof null); //object类型
console.log(typeof {
  name: '哈哈'
}); //object类型
console.log(typeof
  function welcome() {
    return "哈哈"
  }); //function类型

//从上面可以看出来, 不能使用typeof来判断一个数据是否是对象, 因为可能有多重不同的结果

//判断是否是一个数组
console.log(Array.isArray([]));
//判断是否是null
console.log([] === null);

//包装对象, 在Java和OC中都存在, 就是把基本类型包装成对象类型, JS中也有

//三个全是object类型, 所以尽量避免使用new的形式来创建
console.log(typeof new Number(100)); //object类型, 而不是number类型
console.log(typeof new Boolean(true));
console.log(typeof new String("呵呵"));

//如果不使用new关键字, 会强制转换类型
console.log(Number("98l"));
console.log(String(123));


/**
 * Date对象, 用来表示时间, 是JS的内置对象
 */

//获取当前的本机时间(不精准, 用户可以随意修改本机时间)
var currentDate = new Date();
console.log(currentDate);
//可以通过date对象提供的方法, 分别获取时间信息
console.log(currentDate.getFullYear()); //年
console.log(currentDate.getMonth()); //月, 注意月份是从0开始的, 有点坑
console.log(currentDate.getDate()); //日
console.log(currentDate.getDay()); //获取一周的第几天
console.log(currentDate.getHours()); //时
console.log(currentDate.getMinutes()); //分
console.log(currentDate.getSeconds()); //秒\
console.log(currentDate.getTime()); //获取时间戳(TMD, 竟然是毫秒, OC可是秒)

//大多数情况下, 都是根据服务器返回的时间戳来得到一个具体的时间点
var normalDate = new Date(currentDate.getTime()); //传入一个时间戳, 是毫秒
console.log(normalDate);

/**
 * 正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，常常用作按照“给定模式”匹配文本的工具。比如，正则表达式给出一个 Email 地址的模式，然后用它来确定一个字符串是否为 Email 地址。
 */

 //创建正则表达式的方法
 //第一种, 字面量, 以斜杠表示开始和结束。(一般采用该方式, 比较直观, 且解释到该语句就创建了正则表达式)
 var regex = /abc/;
 //第二种, 正则对象(跟字面量的创建方法有所不同, 在创建正则对象时, 才生成了正则表达式)
 var regex1 = new RegExp("abc");
 //在创建正则表达式时, 还可以接收第二个参数, 叫做修饰符
 regex = /abc/i; //i是修饰符
 regex1 = new RegExp("abc", "i");//同上

 //使用正则表达式有两种方法:
 /**
  * 1. 正则表达式的方法, 如: regex.test("哈哈"),返回一个bool值, 是否匹配了正则表达式
  * 2. 字符串的方法, 如: "呵呵".match(regex), 字符串匹配正则表达式, 返回所有匹配结果的一个数组
  */


  

