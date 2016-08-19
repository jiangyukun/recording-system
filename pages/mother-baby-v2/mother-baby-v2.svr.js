/**
 * jiangyukun on 2016/6/12.
 */
'use strict';
angular.module('app').service('motherBabyV2Service', function (iHttp, ngUtil) {

    this.getPatientList = function () {
        return ngUtil.promise([
            {
                id: 'zhansan', name: '张三'
            }, {
                id: 'lisi', name: '李四'
            }
        ]);
    };

});
