'use strict';

angular.module('app.core', []);
angular.module('app.plugin', []);

angular.module('app', [
    'app.core',
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    // 'pascalprecht.translate',
    'toastr',
    'app.plugin',
    'ngDialog'
]);