var dic = {};
var dic1 = dic; //指向了dic这个js对象(指向的是dic的地址)
dic.name = "哈哈"; //dic的地址没有改变, 只是改变了其内部的属性, 所以此时dic1和dic还是相等的
console.log(dic);
console.log(dic1);
dic = {
  age: 10
}; //直接改变了dic的指向, 但是此时的dic1指向的还是dic之前的对象
console.log(dic);
console.log(dic1);



var http = require("http");
var server = http.createServer();
function welcomeFunction(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write("welocme");
  console.log("welocme");
  res.end();
}
//监听事件
server.on('request', welcomeFunction);
//移除事件
server.removeListener("request", welcomeFunction);
server.on("request", function(req, res){
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write("The Great World");
  console.log("The Great World");
  res.end();
});
server.listen(9999);
console.log("服务器已启动");