/**
 * jiangyukun on 16/5/27.
 */
'use strict';
angular.module('app.core').provider('iHttp', function () {
    var local = false;
    this.useLocalData = function () {
        local = true;
    };

    function resolveUrl(url, option) {
        if (!option) {
            return '../' + url;
        }
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                var value = option[key];
                url = url.replace('{' + key + '}', value);
            }
        }
        return '../' + url;
    }

    this.$get = ['$http', 'mockData', '$q', '$timeout', function ($http, mockData, $q, $timeout) {
        return {
            get: function (url, option) {
                handleOption(option);
                url = resolveUrl(url, option);
                var defer = $q.defer();
                if (local) {
                    $timeout(function () {
                        var result = mockData.get(url, option);
                        if (result) {
                            defer.resolve(result);
                        } else {
                            loadFromServer(defer, url, option);
                        }
                    }, 100);
                } else {
                    loadFromServer(defer, url, option);
                }

                return defer.promise;
            },
            post: function (url, option) {
                handleOption(option);
                url = resolveUrl(url, option);
                return $http.post(url, option);
            },
            delete: function (url, option) {
                handleOption(option);
                url = resolveUrl(url, option);
                return $http.delete(url, option);
            },
            put: function (url, option) {
                handleOption(option);
                url = resolveUrl(url, option);
                return $http.put(url, option);
            }
        };

        function loadFromServer(defer, url, option) {
            $http.get(url, option).then(function (result) {
                defer.resolve(result)
            }, function (result) {
                defer.reject(result);
            });
        }

        function handleOption(option) {
            if (option && option.length) {
                option.limit = option.length;
            }
        }
    }];
});
