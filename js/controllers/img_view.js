define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularApp.controller:imgViewCtrl
   * @description
   * # imgViewCtrl
   * Controller of the angularApp
   */
  angular.module('angularApp.controllers.imgViewCtrl', [])
    .controller('imgViewCtrl', function ($scope, $http, $location, GetPhotoData) {
        $scope.method = 'GET';
        $scope.photoId = $location.url().split('/').splice(-1, 1);
        $scope.url = 'http://jsonplaceholder.typicode.com/photos/' + $scope.photoId;

        GetPhotoData($scope.method, $scope.url, $scope);

        $scope.showAlbum = function (albumId) {
            $location.url('album/' + albumId);
        };
    });
});
