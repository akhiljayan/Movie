'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieEditCtrl
 * @description
 * # MovieEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieEditCtrl', function ($scope, $routeParams, $location, Movie) {
    $scope.editMovie = true;
    $scope.movie = {};
    Movie.one($routeParams.id).get().then(function(movie){ //this movie here is the result of call back with all the values
      $scope.movie = movie;
      $scope.saveMovie = function(){
        $scope.movie.save().then(function(){
          $location.path('/movie/'+$routeParams.id);
        });
      };
    });
  });
