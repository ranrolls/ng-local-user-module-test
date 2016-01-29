(function () {
    'use strict';

    angular.module('root').controller('registerCtrl', function($scope, $state, toastr, User) {

	// toastr.info('registerCtrl');
	var vm = this;
	vm.un = ''; vm.p = '';

	vm.login = function(){
		// toastr.info('create new user');
		$state.go('startup.login');
	}

	$scope.submit = function(){

		if(vm.un.length > 0 && vm.p.length > 0){
			// toastr.info('Registering User');
			User.addUser(vm.un, vm.p);
				// toastr.success('user added');
				$state.go('startup.login');
		}else{
			toastr.info('Username and password information not correct');
		}
	}

    })
    ;
})();