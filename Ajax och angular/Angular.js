angular.module('ngabc',[])

.controller('GoodController1',['$scope',function($scope){
$scope.a = 1;
$scope.b = 2;
}])
.controller('GoodController2',GoodController2);
function GoodController2($scope) {
  $scope.name = 'Marc the greatest';
}
GoodController2.$inject = ['$scope'];