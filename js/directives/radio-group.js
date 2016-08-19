/**
 * jiangyukun on 2016/7/20.
 */
+function (window) {
    'use strict';

    var angular = window.angular;

    angular.module('app.plugin').directive('radioGroup', function () {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                $element.addClass('check-wrap');
                $element.find('input[type=radio]').addClass('toggle').attr('name', $attrs['radioGroup']);
            }
        };
    })
}(window);
