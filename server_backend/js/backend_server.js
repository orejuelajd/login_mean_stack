console.log("Servidor encargado del Backend");

var express = require("express");
var bodyParser = require('body-parser');
//var cors = require('cors');
var service = require("./backend_service.js");
var app = express();
var port = 3000;

//app.use(bodyParser.urlenconded({extended: false}));
app.use(bodyParser.json());

var server = app.listen(port);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.send('hello world');
});
app.get("/crear/:collection/:v1/:v2/:v3", service.crear);
app.get("/login/:collection/:usuario/:password/:v3", service.verificacionLogin);
app.get("/buscar/:collection/:param/:value", service.readX);

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//app.use(cors());
