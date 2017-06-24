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
    .controller('albumViewCtrl', function ($scope, $http, $location) {
        $scope.response = null;
        $scope.method = 'GET';
        $scope.albumId = $location.url().split('/').splice(-1, 1);
        $scope.url = 'http://jsonplaceholder.typicode.com/albums/' + $scope.albumId + '/photos';

        $http({method: $scope.method, url: $scope.url}).
          then(function(response) {
              $scope.status = response.status;
              $scope.data = response.data;
              console.log($scope.data);
        });

        $scope.showPhoto = function (photoId) {
            $location.url('image/' + photoId);
        };
    });
});
