var Schema = require('mongoose').Schema;

var Usuario = new Schema({
  usuario: {type:String, required:true, maxlength:140},
  password: {type:String, required:true, maxlength:8}
});

module.exports = Usuario;
