/**
 * jiangyukun on 16/5/27.
 */
+function (window) {
    'use strict';

    var moment = window.moment;
    var util = window.util;
    var angular = window.angular;
    angular.module('app.core').factory('ngUtil', function ($rootScope, constants, settings, toastr, $q, ngDialog, $uibModal) {
        return {
            tipSuccess: function (message) {
                toastr.success(message, '提示');
            },
            tipError: function (message) {
                toastr.error(message, '提示');
            },
            confirm: function (message) {
                var newScope = $rootScope.$new(true);
                newScope.confirmMessage = message;
                return ngDialog.openConfirm({
                    template: 'confirm.html',
                    className: 'ngdialog-theme-default',
                    closeByEscape: false,
                    closeByDocument: false,
                    showClose: false,
                    scope: newScope
                });
            },
            imagePreview: function (url) {
                var newScope = $rootScope.$new(true);
                newScope.pictureUrl = url;

                ngDialog.open({
                    template: util.getPath('pages', 'common/') + 'picture_full_preview.html',
                    className: 'ngdialog-theme-default',
                    closeByEscape: true,
                    closeByDocument: false,
                    showClose: true,
                    width: '80%',
                    scope: newScope
                });
            },
            promise: function (data) {
                var defer = $q.defer();
                defer.resolve(data);
                return defer.promise;
            }
        }
    });
}(window);
