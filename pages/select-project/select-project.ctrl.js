+function (window) {
    'use strict';

    var angular = window.angular;
    angular.module('app').controller('SelectProjectController', function ($location, ngUtil) {
        var vm = this;

        vm.select = select;

        // - - - - - - - - - - - - - - - - - - - - - - - - - -

        function select(index) {
            $location.url('/app/project/mother-baby-v2');
        }

    });
}(window);
