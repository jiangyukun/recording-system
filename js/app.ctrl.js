'use strict';

angular.module('app').controller('AppCtrl', function ($rootScope, $window, $document, $scope, $location) {

    var vm = this;

    var isIE = !!navigator.userAgent.match(/MSIE/i);
    isIE && angular.element($window.document.body).addClass('ie');
    isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

    function isSmartDevice($window) {
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    }

    $document.on('click', function () {
        $rootScope.$broadcast('globalClick');
    });

    $scope.app = {
        name: '数据录入系统',
        settings: {}
    };

    vm.changeProject = changeProject;

    // - - - - - - - - - - - - - - - - - - - - - - - - - -

    function changeProject() {
        $location.url('app/select-project');
    }

});
