require.config({
    paths: {
        'angular': '../node_modules/angular/angular',
        'angular-route': '../node_modules/angular-route/angular-route'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-route': { deps: ['angular'] }
    },
    deps: ['app']
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'angular',
    'app',
    'angular-route'
], function(angular, app, ngRoutes) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app.name]);
    });
});
