import angular from 'angular';
import ngRoute from 'angular-route';
// import ngAnimate from 'angular-animate';

require('!style-loader!css-loader!sass-loader!./scss/core.scss');

const bgimgUrl = require('./scss/img/mfnbfaciu1i-patrick-schneider.png');
const bookImgUrl = require('./scss/img/books.jpg');
const bulbsGif = require('./scss/img/bulbs-bg-animated.gif');
const App = angular.module('myApp', ['ngRoute']).config(['$locationProvider', ($locationProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}])
App.controller('MainController', ['$scope','$location','$anchorScroll', ($scope, $location, $anchorScroll) => {
  console.log('hitting');
  $scope.test = 'testing';
  $scope.imgUrl = bgimgUrl;
  $scope.bookImgUrl = bookImgUrl;
  $scope.bulbsGif = bulbsGif;

  $scope.jumpToHome = () => {
    $location.hash('home');
    $anchorScroll();
  }

  $scope.jumpToEducation = () => {
    $location.hash('education');
    $anchorScroll();
  }

  $scope.jumpToSkills = () => {
    $location.hash('skills');
    $anchorScroll();
  }

}])
.controller('scrollController', ['$scope','$location','$anchorScroll', ($scope, $location, $anchorScroll) => {

}])
.directive('myNav', () => {
  return {
    restrict: 'E',
    templateUrl: './app/templates/nav.html'
  }
})
.directive('myIntroSection', () => {
  return {
    restrict: 'E',
    templateUrl: './app/templates/myIntro.html'
  }
})
.directive('myEduSection', () => {
  return {
    restrict: 'E',
    templateUrl: './app/templates/myEdu.html'
  }
})
.directive('mySkillsSection', () => {
  return {
    restrict: 'E',
    templateUrl: './app/templates/mySkills.html'
  }
});

// angular.module('myApp').config(['$routeProvider', ($routeProvider) => {
//   $routeProvider
//   .when('/', {
//     templateurl: 'templates/'
//   })
// }]);
