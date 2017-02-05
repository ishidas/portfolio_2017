import angular from 'angular';


angular.module('myApp', []).controller('MainController', ['$scope',($scope) => {
  console.log('hitting');
  $scope.test = 'testing';

}]).directive('myNav', () => {
  return {
    restrict: 'E',
    templateUrl: './app/templates/nav.html',
  }
});

// angular.module('myApp').config(['$routeProvider', ($routeProvider) => {
//   $routeProvider
//   .when('/', {
//     templateurl: 'templates/'
//   })
// }]);
