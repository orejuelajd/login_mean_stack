var Schema = require('mongoose').Schema;

var Registro = new Schema({
  tipo: { type:String, required:true, maxlength:140},
  usuario: { type:String, required:true, maxlength:140},
  descripcion: {type:String, required:true, maxlength:140},
  horafecha: {type: String, required: false, maxlength:140}
});

module.exports = Registro;
