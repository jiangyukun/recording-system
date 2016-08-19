/**
 * jiangyukun on 2016/6/12.
 */
'use strict';
angular.module('app').service('selectProjectService', function (iHttp, util) {
    this.userInfo = null;

    this.getUserInfo = function () {
        return this.userInfo;
    };

    this.login = function (userInfo) {
        var self = this;
        return iHttp.get('webBackend/login/{userName}/{passWord}', userInfo).then(function (result) {
            var loginInfo = result.data;
            if (loginInfo.status = 0) {
                self.userInfo = userInfo;
            }
            return util.promise(loginInfo);
        });
    }
});
