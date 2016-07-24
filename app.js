var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
	$scope.tableData = [];
	$scope.person = "";

  $http.get("app/data/MOCK_DATA.json").then(function(resp) {
    $scope.tableData = resp.data;
  });

});