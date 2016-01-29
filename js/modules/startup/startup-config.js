(function () {

    'use strict';

    angular.module('root')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('startup', {
                    abstract: true,
                    url: "/startup",
                    templateUrl: "js/modules/startup/startup.html"
                })
                .state('startup.list', {
                    url: "/list",
                    templateUrl: "js/modules/list/view.html",
                    controller : "ListCtrl"
                })
                ;
        });
})();