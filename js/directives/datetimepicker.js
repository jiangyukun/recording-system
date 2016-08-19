/**
 * jiangyukun on 2016/7/20.
 */
+function (window) {
    'use strict';

    var angular = window.angular;

    angular.module('app.plugin').directive('dateTimePicker', function ($parse) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ($scope, $element, $attrs, ctrl) {
                var dateFormat = $attrs['dateTimePicker'] || 'YYYY-MM-DD HH:mm';
                var modalExpression = $attrs['ngModel'];
                var setter = $parse(modalExpression).assign;
                var dp = $element.datetimepicker({
                    format: dateFormat
                });
                dp.on('dp.change', function (event) {
                    var datetime = event.date.format(dateFormat);
                    if (ctrl) {
                        ctrl.$setViewValue(datetime);
                        return;
                    }
                    setter($scope, datetime);
                });
            }
        };
    })
}(window);
