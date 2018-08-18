var app = angular.module('app', []);


app.controller('PrincipalCtrl', function ($scope, $location, $http) {

    var d = new Date();
    $scope.anocorte = d.getFullYear();

    $scope.url = 'http://transparencia.portalfacil.com.br/api'; //sem a barra

    var id = $location.search().id;
    if (id == undefined) {
        $scope.todos = true;
        $scope.id = 210;
    }
    else {
        $scope.todos = false;
        $scope.id = id;
    }

    $scope.clickToc = function () {
        $location.search('id', $scope.id);
    };

    $scope.nomeCliente = 'Demonstração';
    $scope.idCliente = 210;

    /* Mostra o nome e o id do cliente */
    $http.get($scope.url + '/clientes?type=json')
     .success(function (data) {
         for (i = 0 ; i < data.length ; i++) {
             //console.log(data[i].IdCliente, $scope.id);
             if (data[i].IdCliente == $scope.id) {
                 $scope.nomeCliente = data[i].DescCliente;
                 $scope.idCliente = data[i].IdCliente;
             }
         }
     })
     .error(function (data, status) {
         
         console.error('Erro ao carregar dados', status, data);
     });

});

