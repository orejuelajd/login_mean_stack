var mongoose = require('mongoose'),
db_url = 'localhost/login_mean_stack';
db = mongoose.createConnection(db_url);

var schema_Usuario = require('../modelos/Usuario.js');
Usuario = db.model('Usuario', schema_Usuario);

var schema_Registro = require('../modelos/Registro.js');
Registro = db.model('Registro', schema_Registro);

module.exports = db;
module.exports = mongoose;
