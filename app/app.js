import angular from 'angular';
import ngRoute from 'angular-route';

require('!style-loader!css-loader!sass-loader!./scss/core.scss');

const bgimgUrl = require('./scss/img/books.png');
const hamburgerPinkNav = require('./scss/img/hamburger-pink.png');
const hamburgerWhiteNav = require('./scss/img/hamburger-white.png');
const downArrowsNav = require('./scss/img/down_arrows.png');
const codeFellowsLogo = require('./scss/img/cf.png');
const byuHawaiiLogo = require('./scss/img/byuh.png');
const skillsImg = require('./scss/img/mob_lauren-mancke-60627.png');
const skillsImgBig = require('./scss/img/mob_lauren-mancke-60627.png');
const studyImg = require('./scss/img/mob_aleks-dorohovich-26.png');
const App = angular.module('myApp', ['ngRoute']).config(['$locationProvider', ($locationProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}])
App.controller('MainController', ['$scope','$location','$anchorScroll','$window','$element','$document', ($scope, $location, $anchorScroll, $window, $element, $document) => {
  $scope.imgUrl = bgimgUrl;
  $scope.hamburgerPink = hamburgerWhiteNav;
  $scope.hamburgerWhite = hamburgerPinkNav;
  $scope.downArrows = downArrowsNav;
  $scope.cfLogo = codeFellowsLogo;
  $scope.byuhLogo = byuHawaiiLogo;
  $scope.skillsImg = skillsImg;
  $scope.skillsBigImg = skillsImgBig;
  $scope.studyImg = studyImg;
  $scope.navControle = false;
  $scope.hambergerMenuSwitch = true;
  $scope.screenWidth = $window.innerWidth;

  //watching for screen width change
  angular.element($window).on('resize', () => {
    $scope.screenWidth = $window.innerWidth;
    if($scope.screenWidth > 481) {
      $scope.navControle = false;
    } else {
      $scope.navControle = true;
    }
  });

  //controles hamburger nav toggle
  $scope.navChange = () => {
    $scope.navControle = $scope.navControle ? false : true;
    $scope.hambergerMenuSwitch = $scope.hamburgerMenuSwitch ? false : true;
  }

  $scope.jumpToHome = () => {
    if($scope.screenWidth > 481) {
      $scope.navControle = false;
    } else {
      $scope.navControle = true;
    }
    $location.hash('home');
    $anchorScroll();
  }

  $scope.jumpToIntro = () => {
    if($scope.screenWidth > 481) {
      $scope.navControle = false;
    } else {
      $scope.navControle = true;
    }
    $location.hash('intro');
    $anchorScroll();
  }

  $scope.jumpToEducation = () => {
    if($scope.screenWidth > 481) {
      $scope.navControle = false;
    } else {
      $scope.navControle = true;
    }
    $location.hash('education');
    $anchorScroll();
  }

  $scope.jumpToSkills = () => {
    if($scope.screenWidth > 481) {
      $scope.navControle = false;
    } else {
      $scope.navControle = true;
    }
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
