'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */

angular.module('clientApp')
  .controller('MoviesCtrl',function ($scope, Movie) { //Movie is wot is defined in factory in app
    $scope.movies = Movie.getList().$object; //$object autopopulates all the result
  });
