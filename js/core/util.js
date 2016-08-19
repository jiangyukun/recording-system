/**
 * Created by jiangyukun on 2016/8/17.
 */
+function (window) {
    'use strict';

    window.util = {
        getPath: function (pathName, subPath) {
            var path = '';
            switch (pathName) {
                case 'vendor':
                    path = '../vendor/';
                    break;
                case 'pages':
                    path = 'pages/';
                    break;
                case 'js':
                    path = 'js/';
                    break;
                case 'tpl':
                    path = 'tpl/';
                    break;
                default:
                    throw new Error('unknown pathName');
            }
            return path + subPath;
        }
    }
}(window);