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
    .controller('MainCtrl', function ($scope, $http, $location, GetPhotoData) {
        $scope.method = 'GET';
        $scope.url = 'http://jsonplaceholder.typicode.com/photos';

        GetPhotoData($scope.method, $scope.url, $scope);

        $scope.showPhoto = function (photoId) {
            $location.url('image/' + photoId);
        };

        $scope.showAlbum = function (albumId) {
            $location.url('album/' + albumId);
        };
    });
});
