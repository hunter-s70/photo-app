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
    .controller('MainCtrl', function ($scope, $http) {
        $scope.response = null;
        $scope.method = 'GET';
        $scope.url = 'http://jsonplaceholder.typicode.com/photos';

        $http({method: $scope.method, url: $scope.url}).
        then(function(response) {
            console.log(response);
            $scope.status = response.status;
            $scope.data = response.data;
        }, function(response) {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
        });
    });
});
