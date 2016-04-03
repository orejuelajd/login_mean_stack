require('./db.js');

module.exports.createObjectWithName = function(coleccion, v1, v2, v3) {
	var obj = null;

	if ( coleccion == 'Usuario') {
		obj = new Usuario({usuario:v1, password:v2});
		console.log("Usuario Registrado");
	}
	else if ( coleccion == 'Registro') {
    var d = new Date();
    var horafechastring = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + "--" + d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();
		obj = new Registro({tipo:v1, usuario:v2, descripcion:v3, horafecha:horafechastring});
	}

	return obj;
}

module.exports.findCollectionByName = function(name)
{
	var objeto = null;

	if(name === 'Usuario') {
		objeto = Usuario;
	}
	else if ( name === 'Registro') {
		objeto = Registro;
	}
	return objeto;
}

module.exports.updateData = function(name, key, data, service)
{
	if(name === 'Usuario'){
		Usuario.update({_id: key}, data, {upsert: true}, respuesta);
	}
	else if(name === 'Registro'){
		Registro.update({_id: key}, data, {upsert: true}, respuesta);
	}

	function respuesta (err)
	{
		if ( err)
		{
			return service.json({status:"fail", name:name, description:"ID_OBJECT_DONT_EXIST", value:[{}]});
		}
		else
		{
			return service.json({ status: "ok", name:name, description:"COLLECTION_QUERY_OK", value: key});
		}
	}
}
