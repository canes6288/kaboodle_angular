'use strict';

angular
  .module('kaboodleApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/allcontests', {
        templateUrl: 'views/allcontests.html',
        controller: 'AllContestsCtrl'
      })
      .when('/allcontests/:contestId', {
        templateUrl: 'views/contest.html',
        controller: 'ContestCtrl'
      })
      .when('/addcontest', {
        templateUrl: 'views/addcontest.html',
        controller: 'AddContestCtrl'
      })
      .when('/editcontest', {
        templateUrl: 'views/editcontest.html',
        controller: 'EditContestCtrl'
      })
      .when('/deletecontest', {
        templateUrl: 'views/deletecontest.html',
        controller: 'DeleteContestCtrl'
      })
      .when('/addsubmission', {
        templateUrl: 'views/addsubmission.html',
        controller: 'AddSubmissionCtrl'
      })
      .otherwise({
        redirectTo: '/allcontests'
      });
  });
