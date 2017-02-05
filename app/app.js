import angular from 'angular';
require("!style-loader!css-loader!sass-loader!./scss/core.scss");

angular.module('myApp', []).controller('MainController', ['$scope',($scope) => {
  console.log('hitting');
  $scope.test = 'testing';


}]).directive('myNav', () => {
  return {
    restrict: 'E',
    templateUrl: './app/templates/nav.html'
  }
}).directive('myIntroSection', () => {
  return {
    restrict: 'E',
    templateUrl: './app/templates/myIntro.html'
  }
});

// angular.module('myApp').config(['$routeProvider', ($routeProvider) => {
//   $routeProvider
//   .when('/', {
//     templateurl: 'templates/'
//   })
// }]);
