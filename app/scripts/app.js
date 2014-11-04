'use strict';

/**
 * @ngdoc overview
 * @name boxOfficeMoviesAngularApp
 * @description
 * # boxOfficeMoviesAngularApp
 *
 * Main module of the application.
 */
angular
  .module('boxOfficeMoviesAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
