'use strict';
/*
如果想要操作mysql, 就需要有对应使用语言的驱动, 比如是java来操作的话, 需要的是java链接mysql的驱动, 一般叫做JDBC(java数据库连接); 在nodejs里面, 官方提供了mysql这个包作为mysql数据库的驱动. 驱动就是为了把sql语句传输给数据库, 然后对数据库进行操作
*/
//1. 引入mysql驱动
var s = require('mysql');
//2. 创建数据库的连接, 用来传输sql语句
var connection = s.createConnection(({
  //数据库服务器的主机名(IP地址或者域名)
  host: 'localhost',
  //操作数据库的用户名
  user: 'root',
  //操作数据库的对应用户名的密码
  password: '123456',
  //要操作数据库的名字
  database: 'mySchool'
}));
//3. 与服务器对应的数据库建立连接
connection.connect();
//4. 用来向数据库发送sql语句, 已达到操作数据库的目的, 并且会有回调函数来返回操作的结果

//4.1 查询数据
connection.query('select *from firstSchool', function (error, results, fields) {
  if (error) throw error;
  results.forEach(function (element) {
    console.log(element);
  }, this);
});

//4.2 插入数据
connection.query('insert into firstSchool values(?,?,?)', ["清华大学", "大学", 16], function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

//4.3 修改数据
connection.query('update firstSchool set name=?, type=?, time=? where name=?', ["毕店二中", "初中", 12, "毕店一高"], function (error, results, fields) {
  if (error) {
    console.log("修改数据库数据失败: " + error);
  }
  console.log(results);
});

//4.4 删除数据
connection.query('delete from firstSchool where name=?', ["南阳理工"], function (error, results, fields) {
  if (error) {
    console.log("删除失败:" + error);
  }

  console.log(results);
});
//5. 数据库操作结束以后, 关闭连接
connection.end();

/*
nodejs中的mysql模块是个驱动, 是用来建立和指定mysql数据库的连接, 以供使用sql语句操作数据库的, 其本质还是用sql语句来操作数据库, sql语句里出现的值, 都用?来代替, 所有的值都按顺序放在数组里面来使用(所以一旦会使用SQL语句, 用nodejs来操作数据库, so easy!)
*/