/**
 * jiangyukun on 2016/7/20.
 */
+function (window) {
    'use strict';

    var angular = window.angular;

    angular.module('app.plugin').directive('inputText', function () {
        return {
            restrict: 'EA',
            link: function ($scope, $element, $attrs) {
                $element.find('input').wrap($('<div>').addClass('input-wrap'));
            }
        };
    })
}(window);
