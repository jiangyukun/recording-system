/**
 * jiangyukun on 2016/6/17.
 */
+function (window, undefined) {
    'use strict';

    var angular = window.angular;
    var moment = window.moment;

    angular.module('app.core').filter('dateTime', function () {
        return function (text, format) {
            format = format || 'YYYY-MM-DD'; // HH:mm:ss
            return moment(text).format(format);
        };
    });
}(window);
