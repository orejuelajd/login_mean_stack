//Modulo Angular
var app = angular.module('appRegistro', ['ngResource']);

//Controlador
app.controller('RegistroController', function($scope, $http, $resource) {

	$scope.registrarse = function() {
		if($scope.usuario.password1 == $scope.usuario.password2){
			var url = "http://localhost:3000/crear/Usuario/" + $scope.usuario.usuario + "/" + $scope.usuario.password1 + "/" + "X";
		}else{
			console.log("passwords no coinciden");
		}
		$http.defaults.useXDomain = true;
		$http({
        method: 'GET',
        url: url
      })
			.then(function success(respuesta) {
							if(respuesta.data.value.length > 0){
								console.log("Usuario registrado");
								window.location.href = "http://localhost:4000/vistas/login.html";
							}else{
								console.log("Error al registrar el usuario");
							}
			 			}, function error(err) {
			 				console.log('error');
			 			});
  }
});
