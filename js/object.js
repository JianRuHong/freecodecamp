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
var result2 = 'toString' in dog;//会返回true, 因为toString定义在object对象中，而所有对象最终都会在原型链上指向object，所以xiaoming也拥有toString属性。
var result3 = dog.hasOwnProperty('toString');//判断对象本身又没有某个属性用该方法hasOwnProperty
console.log(result, result1, result2, result3);

//后续的条件判断if..else不再看了, 实在是跟其他的编程语言一样; 循环也不再看了, 也是一致的, 不过在js中有for(var key in 对象或者数组(数组也是对象的一种)), 遍历出来的是key, 属性名, 特别注意一下