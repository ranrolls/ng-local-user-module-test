(function () {
    'use strict';

    angular.module('root').controller('userInfoCtrl', function($scope, $state, toastr, User) {

	// toastr.info('userInfoCtrl');

	var vm = this;

	vm.logout = function(){
		User.logout();
		$state.go('startup.list');
	}

    })
    ;
})();