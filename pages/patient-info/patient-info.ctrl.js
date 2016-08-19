+function (window) {
    'use strict';

    var angular = window.angular;
    angular.module('app').controller('PatientInfoController', function ($stateParams, patientInfoService, ngUtil, $location) {
        var vm = this;
        vm.selectRecordingModel = selectRecordingModel;
        vm.lastActiveIndex = -1;
        vm.active = [];

        initData();

        // - - - - - - - - - - - - - - - - - - - - - - - - - -
        function initData() {
            patientInfoService.getModelList().then(function (modelList) {
                vm.modelList = modelList;
                vm.active[0] = true;
                vm.lastActiveIndex = 0;
            });
        }

        function selectRecordingModel(index, model) {
            if (vm.lastActiveIndex == index) {
                return;
            }
            if (vm.lastActiveIndex != -1) {
                console.log(1);
                vm.active[vm.lastActiveIndex] = false;
            }
            vm.active[index] = true;
            vm.lastActiveIndex = index;
            console.log($location);
            var path = $location.path();
            var i = path.lastIndexOf('/');
            $location.path(path.substring(0, i + 1) + model['id']);
        }

    });
}(window);
