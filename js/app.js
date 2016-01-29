(function () {

    'use strict';
//    angular.module('root', ['common.services','ionic','productResourceMock'])
    angular.module('root', ['ionic', 'toastr'])
            .run(function ($ionicPlatform) {
                $ionicPlatform.ready(function () {

                });
            })
            .config(function ($stateProvider, $urlRouterProvider) {
                // if none of the above states are matched, use this as the fallback
                $urlRouterProvider.otherwise('/startup/cordova');
            })
            .config(function(toastrConfig) {
                angular.extend(toastrConfig, {
                    allowHtml: false,
                    closeButton: true,	//false,
                    closeHtml: '<button>&times;</button>',
                    containerId: 'toast-container',
                    extendedTimeOut: 1000,
                    iconClasses: {
                      error: 'toast-error',
                      info: 'toast-info',
                      success: 'toast-success',
                      warning: 'toast-warning'
                    },
                    maxOpened: 0,
                    messageClass: 'toast-message',
                    newestOnTop: true,
                    onHidden: null,
                    onShown: null,
                    positionClass: 'toast-top-right',
                    preventDuplicates: false,
                    tapToDismiss: true,
                    target: 'body',
                    timeOut: 5000, //5000,
                    titleClass: 'toast-title',
                    toastClass: 'toast'
                });
            });
})();