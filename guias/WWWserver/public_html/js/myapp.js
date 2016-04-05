//Modulo Angular
var app = angular.module('myapp', ['ngResource']);

//Controlador
app.controller('mycontroller', function($scope, $http, $resource) {
	$scope.nombreHTML = '';
	$scope.nombreResource = '';

	$scope.buscarHTML = function() {
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

	$scope.buscarResource = function() {
		if($scope.nombreResource !== '' && $scope.nombreResource !== undefined) {
			var url = 'http://ingenieria.uao.edu.co:4000/buscar/:tabla/:parametro/:valor';
			var busqueda = $resource(url, {valor:'@_valor',tabla:'@_tabla',parametro:'@_parametro'}, {});
			busqueda.get({valor:$scope.nombreResource, parametro:'nombre', tabla:'RegistroDato'}, function(respuesta) {
				$scope.resultadosResource = respuesta.value;
			});
		}
	};
});
