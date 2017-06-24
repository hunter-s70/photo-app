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
    .controller('MainCtrl', function ($scope, $http, $location) {
        $scope.response = null;
        $scope.method = 'GET';
        $scope.url = 'http://jsonplaceholder.typicode.com/photos';

        $http({method: $scope.method, url: $scope.url}).
            then(function(response) {
                $scope.status = response.status;
                $scope.data = response.data;
                console.log($scope.data)
        });

        $scope.showPhoto = function (photoId) {
            $location.url('image/' + photoId);
        };

        $scope.showAlbum = function (albumId) {
            $location.url('album/' + albumId);
        };
    });
});
