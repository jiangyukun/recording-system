/**
 * jiangyukun on 2016/6/12.
 */
'use strict';
angular.module('app').service('accountService', function (iHttp, ngUtil) {


    this.login = function (userInfo) {
        var self = this;
        return iHttp.post('user/login', userInfo).then(function (result) {
            var loginInfo = result.data;
            return ngUtil.promise(loginInfo);
        });
    };

    this.logout = function () {
        iHttp.post('user/loginout');
    }
});
