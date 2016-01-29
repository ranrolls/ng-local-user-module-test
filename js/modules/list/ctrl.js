(function () {
    'use strict';
    angular.module('root').controller('ListCtrl', ['$scope', '$state', 'toastr', ListCtrl]);
    function ListCtrl($scope, $state, toastr) {
// var vm = this;

// vm.go = function(p){
// 	toastr.info(p);
// }

$scope.go = function(s){
	toastr.info(s);
}


    }
    ;
})();