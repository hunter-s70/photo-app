define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularApp.controller:ScrollLoader
   * @description
   * # ScrollLoader
   * ScrollLoader load json data from server
   */
  angular.module('angularApp.services.scrollLoader', [])
    .factory('ScrollLoader', function ($http) {

        var ScrollLoader = function() {
            this.photo = [];
            this.busy = false;
            this.step = 10;
            this.from = 0;
            this.to = this.step;
        };

        ScrollLoader.prototype.nextPage = function() {
            if (this.busy) return;
            this.busy = true;
            var url = 'http://jsonplaceholder.typicode.com/photos';

            $http.get(url, {cache: true}).then(function(response) {
                var ph = response.data;
                for (var i = this.from; i < this.to; i++) {
                    this.photo.push(ph[i]);
                }
                this.busy = false;
                this.to += this.step;
                this.from += this.step;
            }.bind(this));
        };

        return ScrollLoader;

    });
});
