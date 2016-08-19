+function (window) {
    'use strict';

    var angular = window.angular;
    var util = window.util;

    angular.module('app').run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }).config(function ($stateProvider, $urlRouterProvider) {

        var pagesPath = 'pages/';
        var selectProjectPath = pagesPath + 'select-project/';
        var motherBabyV2Path = pagesPath + 'mother-baby-v2/';
        var patientPath = pagesPath + 'patient-info/';
        var patientRecordingPath = patientPath + 'recording/';

        $urlRouterProvider.otherwise('/app/select-project');

        $stateProvider
            .state('app', {
                abstract: true,
                url: '/app',
                templateUrl: pagesPath + 'common/app.html'
            })

            .state('app.select-project', {
                url: '/select-project',
                templateUrl: selectProjectPath + 'select-project.html',
                controller: 'SelectProjectController',
                controllerAs: 'selectProjectCtrl',
                resolve: {
                    deps: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            selectProjectPath + 'select-project.ctrl.js',
                            selectProjectPath + 'select-project.svr.js'
                        ]);
                    }
                }
            })

            .state('app.project', {
                abstract: true,
                url: '/project',
                templateUrl: pagesPath + 'common/project.html'
            })

            .state('app.project.mother-baby-v2', {
                url: '/mother-baby-v2',
                templateUrl: motherBabyV2Path + 'mother-baby-v2.html',
                controller: 'MotherBabyV2Controller',
                controllerAs: 'motherBabyV2Ctrl',
                resolve: {
                    deps: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            motherBabyV2Path + 'mother-baby-v2.ctrl.js',
                            motherBabyV2Path + 'mother-baby-v2.svr.js'
                        ]);
                    }
                }
            })

            .state('app.project.patient', {
                abstract: true,
                url: '/patient-info/{patientId}',
                templateUrl: patientPath + 'patient-info.html',
                controller: 'PatientInfoController',
                controllerAs: 'patientInfoCtrl',
                resolve: {
                    deps: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            patientPath + 'patient-info.ctrl.js',
                            patientPath + 'patient-info.svr.js'
                        ]);
                    }
                }
            })

            .state('app.project.patient.model', {
                url: '/{modelId}',
                templateUrl: function ($stateParams) {
                    var modelPath = $stateParams['modelId'];
                    return patientRecordingPath + modelPath + '/' + modelPath + '.html'
                }/*,
                controller: function ($stateParams) {
                    var modelPath = $stateParams['modelId'];
                    modelPath = modelPath.replace(/-(\w)/, function (s0, s1) {
                        return angular.uppercase(s1);
                    });
                    modelPath = 'Recording' + angular.uppercase(modelPath[0]) + modelPath.substring(1);

                    return modelPath + 'Controller';
                }*/,
                resolve: {
                    deps: function ($ocLazyLoad, $stateParams) {
                        var modelName = $stateParams['modelId'];
                        var modelPath = patientRecordingPath + modelName + '/' + modelName;
                        return $ocLazyLoad.load([
                            modelPath + '.ctrl.js',
                            modelPath + '.svr.js'
                        ]);
                    }
                }
            })
    });
}(window);
