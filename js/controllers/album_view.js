define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularApp.controller:albumViewCtrl
   * @description
   * # albumViewCtrl
   * Controller of the angularApp
   */
  angular.module('angularApp.controllers.albumViewCtrl', [])
    .controller('albumViewCtrl', function ($scope, $http, $location, GetPhotoData) {
        $scope.method = 'GET';
        $scope.albumId = $location.url().split('/').splice(-1, 1);
        $scope.url = 'http://jsonplaceholder.typicode.com/albums/' + $scope.albumId + '/photos';

        GetPhotoData($scope.method, $scope.url, $scope);

        $scope.showPhoto = function (photoId) {
            $location.url('image/' + photoId);
        };
    });
});
