'use strict';

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.send("<h1>Hello World</h1>");
  });
  app.get('/mahao', function (req, res) {
    res.send("<h1>马豪</h1>");
  });
  app.get('/about', function (req, res) {
    res.send("<h1>About</h1>");
  });
  app.get('/content', function (req, res) {
    res.send("<h1>Content</h1>");
  });
}