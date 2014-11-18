'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
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
      .when('/contest', {
        templateUrl: 'views/contest.html',
        controller: 'ContestCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/delete', {
        templateUrl: 'views/delete.html',
        controller: 'DeleteCtrl'
      })
      .otherwise({
        redirectTo: '/allcontests'
      });
  });
