define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the angularApp
   */
  angular.module('angularApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope, $http, $location, ScrollLoader) {
        $scope.method = 'GET';
        $scope.url = 'http://jsonplaceholder.typicode.com/photos';

        $scope.data = new ScrollLoader();

        $scope.showPhoto = function (photoId) {
            $location.url('image/' + photoId);
        };

        $scope.showAlbum = function (albumId) {
            $location.url('album/' + albumId);
        };
    });
});
