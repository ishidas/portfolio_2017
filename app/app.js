import angular from 'angular';
require('!style-loader!css-loader!sass-loader!./scss/core.scss');
const bgimgUrl = require('./scss/img/mfnbfaciu1i-patrick-schneider.png');

angular.module('myApp', []).controller('MainController', ['$scope',($scope) => {
  console.log('hitting');
  $scope.test = 'testing';
  $scope.imgUrl = bgimgUrl;

}]).controller('scrollController', ['$scope','$location','$anchorScroll', ($scope, $location, $anchorScroll) => {
  $scope.jumpToPageTwo = () => {
    $location.hash('pagetwo');
  }
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
}).directive('myEduSection', () => {
  return {
    restrict: 'E',
    templateUrl: './app/templates/myEdu.html'
  }
}).directive('myExperienceSection', () => {
  return {
    restrict: 'E',
    templateUrl: './app/templates/myExperience.html'
  }
});

// angular.module('myApp').config(['$routeProvider', ($routeProvider) => {
//   $routeProvider
//   .when('/', {
//     templateurl: 'templates/'
//   })
// }]);
