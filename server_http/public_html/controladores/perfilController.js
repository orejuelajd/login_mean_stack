//Modulo Angular
var app = angular.module('appPerfil', ['ngResource']);

//Controlador
app.controller('perfilController', function($scope, $http, $resource) {
	$scope.nombreHTML = '';
	$scope.nombreResource = '';

	$scope.desplegarRegistrosUsuario = function() {
		if($scope.nombreHTML !== '' && $scope.nombreHTML !== undefined) {
			//var url = 'http://ingenieria.uao.edu.co:4000/buscar/RegistroDato/nombre/' + $scope.nombreHTML;
			var url = "http://localhost:3000/buscar/Registro/usuario/" + $scope.nombreHTML;
		$http({
				method: 'GET',
				url: url
			}).then(function success(respuesta) {
					$scope.resultadosHTML = respuesta.data.value;
				}, function error(err) {
					console.log('error');
				});
		};
	}
});
