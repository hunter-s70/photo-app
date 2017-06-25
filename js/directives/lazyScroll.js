define(['angular'], function (angular) {
  'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:lazyScroll
 * @description
 * # lazyScroll
 * lazyScroll - scroll event to Angular
 */
  angular.module('angularApp.directives.lazyScroll', [])
    .directive('lazyScroll', function ($rootScope, $window, $timeout) {
        return {
            link: function(scope, elem, attrs) {
                var checkWhenEnabled, handler, scrollDistance, scrollEnabled;
                $window = angular.element($window);
                scrollDistance = 0;
                if (attrs.lazyScrollDistance != null) {
                    scope.$watch(attrs.lazyScrollDistance, function(value) {
                        return scrollDistance = parseInt(value, 10);
                    });
                }
                scrollEnabled = true;
                checkWhenEnabled = false;
                if (attrs.lazyScrollDisabled != null) {
                    scope.$watch(attrs.lazyScrollDisabled, function(value) {
                        scrollEnabled = !value;
                        if (scrollEnabled && checkWhenEnabled) {
                            checkWhenEnabled = false;
                            return handler();
                        }
                    });
                }
                handler = function() {
                    var elementBottom, remaining, shouldScroll, windowBottom;
                    windowBottom = window.innerHeight + window.pageYOffset;
                    elementBottom = elem[0].offsetTop + elem[0].offsetHeight;
                    remaining = elementBottom - windowBottom;
                    shouldScroll = remaining <= window.innerHeight * scrollDistance;
                    if (shouldScroll && scrollEnabled) {
                        if ($rootScope.$$phase) {
                            return scope.$eval(attrs.lazyScroll);
                        } else {
                            return scope.$apply(attrs.lazyScroll);
                        }
                    } else if (shouldScroll) {
                        return checkWhenEnabled = true;
                    }
                };
                $window.on('scroll', handler);
                scope.$on('$destroy', function() {
                    return $window.off('scroll', handler);
                });
                return $timeout((function() {
                    if (attrs.lazyScrollImmediateCheck) {
                        if (scope.$eval(attrs.lazyScrollImmediateCheck)) {
                            return handler();
                        }
                    } else {
                        return handler();
                    }
                }), 0);
            }
        }
    });
});
