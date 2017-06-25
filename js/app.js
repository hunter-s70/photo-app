define(['angular',
        'controllers/main',
        'controllers/img_view',
        'controllers/album_view',
        'services/getPhotoData',
    ],
function (angular, MainCtrl, imgViewCtrl, albumViewCtrl, getPhotoData) {
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
        'angularApp.controllers.albumViewCtrl',
        'angularApp.services.getPhotoData',
        'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/image/:id', {
          templateUrl: 'views/img_view.html',
          controller: 'imgViewCtrl',
          controllerAs: 'img_view'
        })
        .when('/album/:id', {
            templateUrl: 'views/album_view.html',
            controller: 'albumViewCtrl',
            controllerAs: 'album_view'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
