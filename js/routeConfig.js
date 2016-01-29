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
                .state('startup.login', {
                    url: "/login",
                    templateUrl: "js/modules/login/view.html",
                    controller : "loginCtrl"
                })
                .state('startup.register', {
                    url: "/register",
                    templateUrl: "js/modules/register/view.html",
                    controller : "registerCtrl"
                })
                .state('startup.userInfo', {
                    url: "/userInfo",
                    templateUrl: "js/modules/userInfo/view.html",
                    controller : "userInfoCtrl"
                })
                .state('startup.restrictedArea', {
                    url: "/restrictedArea",
                    templateUrl: "js/modules/restrictedArea/view.html",
                    controller : "restrictedAreaCtrl"
                })
                ;
        });
})();