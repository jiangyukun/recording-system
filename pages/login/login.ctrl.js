+function (window) {
    'use strict';

    var angular = window.angular;
    angular.module('app').controller('LoginController', function (accountService, ngUtil) {
        var vm = this;

        vm.login = login;

        // - - - - - - - - - - - - - - - - - - - - - - - - - -

        function login() {
            accountService.login({
                'user_Name': vm.username,
                'user_PassWord': vm.password
            }).then(function (response) {
                if (response.status == 0) {
                    location.href = 'index.html';
                    return;
                }
                ngUtil.tipError(response['rspMsg']);
                // console.log(response);
            });
        }

    });
}(window);
