/**
 * jiangyukun on 2016/6/12.
 */
'use strict';
angular.module('app').service('patientInfoService', function (iHttp, ngUtil) {

    this.getModelList = function () {
        return ngUtil.promise([
            {id: 'base-info', name: '访视0 基本信息'},
            {id: '12-24-week', name: '访视1 12-24周'},
            {id: '24-32-week', name: '访视2 24-32周'},
            {id: 'baseInfo', name: '访视3 分娩'},
            {id: 'baseInfo', name: '访视4 产后4-8周'},
            {id: 'baseInfo', name: '访视5 产后7-12周'},
            {id: 'baseInfo', name: '补充页'},
            {id: 'baseInfo', name: '药物相关不良反应记录'},
            {id: 'baseInfo', name: '抗病毒药物使用情况'},
            {id: 'baseInfo', name: '保肝药物使用情况'},
            {id: 'baseInfo', name: '是否完成队列'}

        ])
    }

});
