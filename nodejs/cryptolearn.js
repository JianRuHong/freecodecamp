'use strict';

/*
哈希算法将任意长度的二进制值映射为较短的固定长度的二进制值, 这个小的二进制值称为哈希值
*/

//MD5(信息摘要算法), 其主要特点是不管任意长度的数据, 会被压缩为固定长度的一段十六进制字符串
//MD5是不可逆的, 不能通过MD5的值来确定原始数据, 举个例子说给你个数字9, 你说是3 * 3得9, 但是有可能是4 + 5等于9呢; 这是个形象的比喻, 但是其原理是在计算原来数据的时候是有舍弃的, 即原数据在被加密成MD5值的时候, 其实是做了删除或者其他处理的, 参考链接:https://www.zhihu.com/question/22651987?sort=created
var test = require('crypto');
var hash = test.createHash('md5');
hash.update("welcome");
console.log(hash.digest('hex'));
var hash1 = test.createHash('md5');
hash1.update("welcome");
console.log(hash1.digest('hex'));

//Hmac算法, 也是哈希算法, 他是利用了MD5算法或者SHA等算法, 不同之处是加入了密钥. 以一个密钥和一个消息为输入，生成一个消息摘要作为输出。参考链接:https://baike.baidu.com/item/hmac/7307543?fr=aladdin
//实用场景:用户在客户端输入密码后, 通过服务器返回的秘钥(其实就是一个随机的字符串), 给密码进行Hmac运算,把得到的消息摘要返回给服务器, 服务器同样通过Hmac来把服务器保存的密码进行运算(不能解析客户端发送来的消息摘要, 因为是不可逆的), 如果是一致的就是正确的密码. 这样做的好处是, 在网络请求过程中, 用户的密码根本没有暴露, 传送的只是Hmac算法生成的消息摘要, 其安全性比MD5更高

var hmac = test.createHmac('md5', "kisscp");//只要秘钥发生改变, 其结果就会发生改变
hmac.update("welcome");
console.log(hmac.digest('hex'));


/*
上面学习的MD5以及Hmac算法都是不可逆的, 意思是不能通过其消息摘要(算法结果)来获取原数据, 而对称算法可以获取其原始数据
对称算法: 对称加密(也叫私钥加密)指加密和解密使用相同密钥的加密算法。有时又叫传统密码算法，就是加密密钥能够从解密密钥中推算出来，同时解密密钥也可以从加密密钥中推算出来。
*/

//AES是一种常用的对称加密算法，加解密都用同一个密钥, crypto模块提供了AES支持，但是需要自己封装好函数，便于使用
//注意到AES有很多不同的算法，如aes192，aes-128-ecb，aes-256-cbc等
//通过同一个秘钥加密
function aesEncodeAction(data, key){
  //cliper是密码的意思, 该方法是创建一个指定算法的加密工具
  var aesencode = test.createCipher('aes192', key);
  var result = aesencode.update(data, 'utf8', 'hex');
  result += aesencode.final('hex');
  return result;
}

//通过同一个秘钥解密
function aedDencodeAction(result, key){
  //创建一个指定算法的解密工具
  var aesdeencode = test.createDecipher('aes192', key);
  //把一个十六进制的密码解密成utf-8格式的数据
  var content = aesdeencode.update(result,'hex', 'utf8');
  content += aesdeencode.final('utf8');
  return content;
}

//加密
var reslut = aesEncodeAction("welocme to china", "kiss");
console.log(reslut);

//解密
var content = aedDencodeAction(reslut, "kiss");
console.log(content);


//Diffie-Hellman(帝妃-赫尔曼)算法, 其实是秘钥交换协议, 然后使用其他加密算法来处理

//crypto模块也可以处理数字证书。数字证书通常用在SSL连接，也就是Web的https连接。




