define(['angular', 'controllers/main', 'controllers/img_view'],
function (angular, MainCtrl, imgViewCtrl) {
  'use strict';

  /**
   * @ngdoc overview
   * @name angularApp
   * @description
   * # angularApp
   *
   * Main module of the application.
   */
  return angular
    .module('angularApp', [
        'angularApp.controllers.MainCtrl',
        'angularApp.controllers.imgViewCtrl',
        'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/img', {
          templateUrl: 'views/img_view.html',
          controller: 'imgViewCtrl',
          controllerAs: 'img_view'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
