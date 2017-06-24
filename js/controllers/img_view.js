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
    .controller('imgViewCtrl', function ($scope, $http, $location) {
        $scope.response = null;
        $scope.method = 'GET';
        $scope.photoId = $location.url().split('/').splice(-1, 1);
        console.log($scope.photoId);
        $scope.url = 'http://jsonplaceholder.typicode.com/photos/' + $scope.photoId;

        $http({method: $scope.method, url: $scope.url}).
        then(function(response) {
            console.log(response);
            $scope.status = response.status;
            $scope.data = response.data;
            console.log($scope.data);
        }, function(response) {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
        });
    });
});
