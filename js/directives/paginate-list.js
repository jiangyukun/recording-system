/**
 * jiangyukun on 2016/7/5.
 * 分页列表指令封装
 */
+function (window) {
    'use strict';

    var angular = window.angular;
    angular.module('app').directive('paginateList', function (util, settings, loadingService) {
        return {
            restrict: 'E',
            scope: {
                fetchList: '&',
                currentItem: '='
            },
            transclude: true,
            templateUrl: 'pages/common/paginate-list.html',
            controllerAs: 'paginateList',
            controller: function ($scope, $element) {
                var vm = this;
                var length = settings.pageSize;

                vm.currentPage = 1;
                vm.pageTotal = 0;
                vm.draw = 0; // 用来判断请求结果的先后顺序，后端接口暂不支持
                vm.recordsTotal = 0;
                vm.pages = [];
                vm.sortRules = [];
                vm.jumpToPage = jumpToPage;
                vm.beforePage = beforePage;
                vm.nextPage = nextPage;
                vm.addSortRule = addSortRule;

                $scope.$on('refreshFirstPageList', refreshFirstPageList);
                $scope.$on('sortBy', sortBy);

                fetchListPage();

                //分页数据请求入口
                function fetchListPage() {

                    var destroyLoading = loadingService.showLoading($element.find('.js-table-container'));
                    var draw = vm.draw;
                    var start = vm.currentPage - 1;

                    var pageInfo = {
                        start: start, length: length, draw: draw
                    };
                    if (vm.sort) {
                        pageInfo.order = vm.sort;
                        pageInfo.order_By = vm.sortBy;
                    }

                    $scope.fetchList({
                        pageInfo: pageInfo
                    }).then(function (totalSize) {
                        updatePageInfo(totalSize);
                        destroyLoading();
                    });
                    vm.draw++;
                }

                function refreshFirstPageList() {
                    vm.currentPage = 1;
                    fetchListPage();
                }

                /*
                 * sortBy 对应数据库的列
                 * sort 默认、升序，降序
                 * */
                function sortBy(event, sortBy, sort) {
                    vm.sortBy = sortBy;
                    vm.sort = sort;
                    for (var i = 0; i < vm.sortRules.length; i++) {
                        var sortRule = vm.sortRules[i];
                        // console.log(sortRule);
                        if (sortBy != sortRule.sortBy) {
                            sortRule.init();
                        }
                    }
                    refreshFirstPageList();
                }

                function addSortRule(rule) {
                    vm.sortRules.push(rule);
                }

                function updatePageInfo(totalSize) {
                    vm.recordsTotal = totalSize;
                    vm.pageTotal = parseInt((totalSize + length - 1) / length);
                    vm.pages = util.getPagesToShow(vm.pageTotal, vm.currentPage);
                }

                function jumpToPage(page) {
                    if (vm.currentPage == page || page == '...') {
                        return;
                    }
                    vm.currentPage = page;
                    fetchListPage();
                }

                function beforePage() {
                    if (vm.currentPage > 1) {
                        vm.currentPage--;
                        fetchListPage();
                    }
                }

                function nextPage() {
                    if (vm.currentPage < vm.pageTotal) {
                        vm.currentPage++;
                        fetchListPage();
                    }
                }
            },
            link: function ($scope, $element, $attrs, ctrl, $transclude) {
                $transclude(function (clone, scope) {
                    $element.find('.js-table-container').append(clone);
                });
            }
        }
    });
}(window);
