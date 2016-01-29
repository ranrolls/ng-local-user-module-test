(function () {
    'use strict';
    angular.module('root').controller('StartupCordovaCtrl', ['$state', 'toastr', StartupCordovaCtrl]);
    function StartupCordovaCtrl($state, toastr) {

toastr.info('yeh');

    }
    ;
})();