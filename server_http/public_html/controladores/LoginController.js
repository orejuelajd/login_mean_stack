//Modulo Angular
var app = angular.module('myapp', ['ngResource']);

//Controlador
app.controller('LoginController', function($scope, $http, $resource) {
	// $scope.nombreHTML = '';
	// $scope.nombreResource = '';

	//$scope.usuario.usuario = '';
	//$scope.usuario.password = '';

	// $scope.buscarHTML = function() {
	// 	if($scope.nombreHTML !== '' && $scope.nombreHTML !== undefined) {
	// 		var url = 'http://ingenieria.uao.edu.co:4000/buscar/RegistroDato/nombre/' + $scope.nombreHTML;
	// 	$http({
	// 			method: 'GET',
	// 			url: url
	// 		}).then(function success(respuesta) {
	// 				$scope.resultadosHTML = respuesta.data.value;
	// 			}, function error(err) {
	// 				console.log('error');
	// 			});
	// 	};
	// }

	$scope.loguearse = function() {
    var url = "http://localhost:3000/login/Usuario/" + $scope.usuario.usuario + "/" + $scope.usuario.password + "/" + "X";
		$http.defaults.useXDomain = true;
		$http({
        method: 'GET',
        url: url,
				//Access-Control-Allow-Origin: *
				//dataType: 'jsonp'
        //headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      })
			.then(function success(respuesta) {
			 				//$scope.resultadosHTML = respuesta.data.value;
							if(respuesta.data.value.length > 0){
								console.log("Login exitoso");
							}else{
								console.log("Login erroneo");
							}
			 			}, function error(err) {
			 				console.log('error');
			 			});
  }

	// $scope.buscarResource = function() {
	// 	if($scope.nombreResource !== '' && $scope.nombreResource !== undefined) {
	// 		var url = 'http://ingenieria.uao.edu.co:4000/buscar/:tabla/:parametro/:valor';
	// 		var busqueda = $resource(url, {valor:'@_valor',tabla:'@_tabla',parametro:'@_parametro'}, {});
	// 		busqueda.get({valor:$scope.nombreResource, parametro:'nombre', tabla:'RegistroDato'}, function(respuesta) {
	// 			$scope.resultadosResource = respuesta.value;
	// 		});
	// 	}
	// };
});

//app.config(['$httpProvider', function($httpProvider) {
//        $httpProvider.defaults.useXDomain = true;
//        delete $httpProvider.defaults.headers.common['X-Requested-With'];
//    }
//]);
