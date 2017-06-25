define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularApp.controller:getPhotoData
   * @description
   * # getPhotoData
   * get json data from server
   */
  angular.module('angularApp.services.getPhotoData', [])
    .factory('GetPhotoData', function ($http) {

        return function (method, url, scope) {
            $http({method: method, url: url}).
            then(function(response) {
                scope.status = response.status;
                scope.data = response.data;
            });
        }

    });
});
