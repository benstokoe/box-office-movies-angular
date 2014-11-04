'use strict';

/**
 * @ngdoc function
 * @name boxOfficeMoviesAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boxOfficeMoviesAngularApp
 */
angular.module('boxOfficeMoviesAngularApp')
  .controller('MainCtrl', function ($scope, $http) {

    var responsePromise = $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=7jyadrpxu7fpa8xmtzgfghfx&callback=JSON_CALLBACK');

    responsePromise.success(function(data) {
      $scope.movies = data.movies;
    });
  });
