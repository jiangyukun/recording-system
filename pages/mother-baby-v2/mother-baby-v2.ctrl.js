+function (window) {
    'use strict';

    var angular = window.angular;
    angular.module('app').controller('MotherBabyV2Controller', function (motherBabyV2Service, ngUtil, $location) {
        var vm = this;

        vm.selectPatient = selectPatient;

        initData();

        // - - - - - - - - - - - - - - - - - - - - - - - - - -
        function initData() {
            motherBabyV2Service.getPatientList().then(function (patientList) {
                vm.patientList = patientList;
            });
        }

        function selectPatient(patient) {
            $location.url('/app/project/patient-info/' + patient.id + '/base-info');
        }
    });
}(window);
