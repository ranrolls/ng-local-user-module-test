(function () {
    'use strict';

    angular.module('root').controller('loginCtrl', function($scope, $state, toastr, User) {

	// toastr.info('nmCtrl');
	var vm = this;
	vm.un = ''; vm.p = '';

	// vm.un = 'admin'; vm.p = 'admin';

	vm.createNewUser = function(){
		// toastr.info('create new user');
		$state.go('startup.register');
	}

	$scope.submit = function(){

		// toastr.success(vm.un);
		// toastr.success(vm.p);

		if(vm.un.length > 0 && vm.p.length > 0){
			toastr.info('Finding User');
			if(User.checkUser(vm.un, vm.p) == true){
				toastr.success('user found');
				User.login();
				$state.go('startup.userInfo');
			}else{
				toastr.error('user not found');
			}
		}else{
			toastr.info('Username and password information not correct');
		}
	}

    })
    ;
})();