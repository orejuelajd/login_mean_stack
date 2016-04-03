console.log("Servidor encargado del Backend");

var express = require("express");
var app = express();
var port = 3000;

//app.use(bodyParser.urlenconded({extended: false}));
//app.use(bodyParser.json());

var server = app.listen(port);

app.get('/', function(req, res) {
  res.send('hello world');
});
