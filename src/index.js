// https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/
// https://blog.risingstack.com/your-first-node-js-http-server/
// http://expressjs.com/en/starter/hello-world.html
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});