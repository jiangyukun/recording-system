'use strict';
angular.module('app').config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: [
            {
                name: 'ngFileUpload',
                files: [
                    '../vendor/bower_components/ng-file-upload/ng-file-upload.js'
                ]
            }
        ]
    });
}]);
