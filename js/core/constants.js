/**
 * jiangyukun on 2016/6/12.
 */
+function (window) {
    'use strict';

    var angular = window.angular;

    function getDefaultTypeItem(typeList) {
        if (!typeList) {
            typeList = []
        }
        typeList.unshift({
            value: '', text: '不限'
        });
        return typeList;
    }

    var yesOrNo = {
        yes: '1',
        no: '0'
    };
    var userType = {
        hepatitisB: '0',
        motherAndBaby: '1'
    };
    var sliderType = {
        guide: '0',
        index: {
            hepatitisB: '1',
            motherAndBaby: '2',
            all: '3'
        }
    };
    var appSystemType = {
        ios: 1,
        android: 2
    };
    var appClientType = {
        patient: 1,
        doctor: 2
    };

    var auditingState = {
        auditing: 1, //审核中
        auditingPass: 2,
        auditingUnPass: 3
    };
    angular.module('app.core').value('constants', {
        allowPost: {
            1: '是',
            0: '否'
        },
        boardType: {
            '0': '业务模块',
            '1': '最新',
            '2': '最热'
        },
        yesOrNo: yesOrNo,
        userType: userType,
        sliderType: sliderType,
        appSystemType: appSystemType,
        appClientType: appClientType,
        auditingState: auditingState,
        queryFilter: {
            appUpdate: {
                appType: {
                    typeCode: 'appType',
                    typeText: '系统类型',
                    typeItemList: getDefaultTypeItem([
                        {value: appSystemType.android, text: 'Android'},
                        {value: appSystemType.ios, text: 'IOS'}
                    ])
                },
                forceUpdate: {
                    typeCode: 'forceUpdate',
                    typeText: '强制更新',
                    typeItemList: getDefaultTypeItem([
                        {value: '1', text: '是'},
                        {value: '0', text: '否'}
                    ])
                }
            },
            info: {
                userTypeList: {
                    typeCode: 'userType',
                    typeText: '用户类型',
                    typeItemList: [
                        {value: '', text: '不限'},
                        {value: userType.hepatitisB, text: '乙肝用户'},
                        {value: userType.motherAndBaby, text: '母婴用户'}
                    ]
                }
            },
            slider: {
                sliderTypeList: {
                    typeCode: 'sliderType',
                    typeText: '轮播类型',
                    typeItemList: getDefaultTypeItem([
                        {value: sliderType.index.motherAndBaby, text: '母婴'},
                        {value: sliderType.index.hepatitisB, text: '乙肝'},
                        {value: sliderType.index.all, text: '所有'}
                    ])
                }
            },
            knowledgeBase: {
                knowledgeBaseType: {
                    typeCode: 'knowledgeBaseType',
                    typeText: '知识库类型',
                    typeItemList: getDefaultTypeItem([])
                },
                knowledgeBaseSubType: {
                    typeCode: 'knowledgeBaseSubType',
                    typeText: '知识库子类型',
                    typeItemList: getDefaultTypeItem([])
                }
            },
            board: {
                allowPost: {
                    typeCode: 'allowPost',
                    typeText: '允许发帖',
                    typeItemList: getDefaultTypeItem([
                        {
                            value: '1', text: '是'
                        },
                        {
                            value: '0', text: '否'
                        }
                    ])
                }
            },
            post: {
                boardType: {
                    typeCode: 'belongToBoard',
                    typeText: '所属板块',
                    typeItemList: getDefaultTypeItem()
                },
                isDelete: {
                    typeCode: 'isDelete',
                    typeText: '是否删除',
                    typeItemList: [
                        {
                            value: '', text: '不限'
                        },
                        {
                            value: '1', text: '是'
                        },
                        {
                            value: '0', text: '否'
                        }
                    ]
                },
                isAnonymous: {
                    typeCode: 'isAnonymous',
                    typeText: '是否匿名',
                    typeItemList: [
                        {
                            value: '', text: '不限'
                        },
                        {
                            value: '1', text: '是'
                        },
                        {
                            value: '0', text: '否'
                        }
                    ]
                }
            },
            common: {
                month2NowList: {
                    typeCode: 'createTime',
                    typeText: '创建日期',
                    typeItemList: getDefaultTypeItem([
                        {
                            value: '<1', text: '1个月内'
                        },
                        {
                            value: '1-3', text: '1-3个月'
                        },
                        {
                            value: '3-6', text: '3-6个月'
                        },
                        {
                            value: '6-12', text: '6-12个月'
                        },
                        {
                            value: '>12', text: '12个月以上'
                        }
                    ])
                },
                auditingState: {
                    typeCode: 'auditingState',
                    typeText: '审核状态',
                    typeItemList: getDefaultTypeItem([
                        {value: auditingState.auditing, text: '审核中'},
                        {value: auditingState.auditingPass, text: '审核通过'},
                        {value: auditingState.auditingUnPass, text: '审核不通过'}
                    ])
                },
                isShow: {
                    typeCode: 'isShow',
                    typeText: '是否显示',
                    typeItemList: getDefaultTypeItem([
                        {value: '1', text: '是'},
                        {value: '0', text: '否'}
                    ])
                },
                minority: {
                    typeCode: 'minority',
                    typeText: '民族',
                    typeItemList: getDefaultTypeItem([
                        {value: '汉族', text: '汉族'},
                        {value: '其他', text: '其他'}
                    ])
                }
            }
        }
    });

}(window);
