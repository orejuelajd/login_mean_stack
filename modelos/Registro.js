var Schema = required('mongoose').Schema;

var Registro = new Schema({
  tipoError: { type:String, required:true, maxlength:140},
  usuario: { type:String, required:false, maxlength:140},
  descripcion: {type:String, required:false, maxlength:140}
});

module.exports = Registro;
