import angular from 'angular';
import ngRoute from 'angular-route';

require('!style-loader!css-loader!sass-loader!./scss/core.scss');

const downArrowsNav = require('./scss/img/down_arrows.png');
const codeFellowsLogo = require('./scss/img/cf.png');
const byuHawaiiLogo = require('./scss/img/byuh.png');
const skillsImg = require('./scss/img/mob_lauren-mancke-60627.png');
const skillsImgBig = require('./scss/img/mob_lauren-mancke-60627.png');
const studyImg = require('./scss/img/mob_aleks-dorohovich-26.png');
const gitImg = require('./scss/img/git.png');
const linkedInImg = require('./scss/img/linkedin.png');


const App = angular.module('myApp', ['ngRoute']).config(['$locationProvider', ($locationProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}])
App.controller('MainController', ['$scope','$location','$anchorScroll','$window','$element','$document', ($scope, $location, $anchorScroll, $window, $element, $document) => {
  $scope.downArrows = downArrowsNav;
  $scope.emptyImg = "";
  $scope.cfLogo = codeFellowsLogo;
  $scope.byuhLogo = byuHawaiiLogo;
  $scope.skillsImg = skillsImg;
  $scope.skillsBigImg = skillsImgBig;
  $scope.studyImg = studyImg;
  $scope.gitImg = gitImg;
  $scope.linkedInImg = linkedInImg;


    $scope.screenWidth = $window.innerWidth;
    if($scope.screenWidth > 500) {
      $scope.clicked = true;
    } else {
      $scope.clicked = false;
    }

  //controles hamburger nav toggle
  $scope.navChange = () => {
    $scope.clicked = $scope.clicked ? false : true;
  }

  $scope.jumpToHome = () => {
    if($scope.screenWidth < 500) {
      $scope.clicked = false;
    }
    $location.hash('home');
    $anchorScroll();
  }

  $scope.jumpToIntro = () => {
    if($scope.screenWidth < 500) {
      $scope.clicked = false;
    }
    $location.hash('intro');
    $anchorScroll();
  }

  $scope.jumpToEducation = () => {
    if($scope.screenWidth < 500) {
      $scope.clicked = false;
    }
    $location.hash('education');
    $anchorScroll();
  }

  $scope.jumpToSkills = () => {
    if($scope.screenWidth < 500) {
      $scope.clicked = false;
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
