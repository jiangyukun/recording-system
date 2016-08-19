/**
 * Created by jiangyukun on 2016/6/17.
 */
angular.module('app.core').filter('toInt', function () {
    return function (text) {
        if (!text) return 0;
        if (typeof text == 'number') {
            return text;
        }
        if (typeof text == 'string') {
            return parseInt(text);
        }
        return parseInt(text.toString());
    };
});