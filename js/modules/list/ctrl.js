(function () {
    'use strict';

    angular.module('root').controller('ListCtrl', ['$scope', '$state', 'toastr', ListCtrl]);
    function ListCtrl($scope, $state, toastr) {


function login(){
	toastr.info('login');
}

function register(){
	toastr.info('register');
}

function userInfo(){
	toastr.info('userInfo');
}

function restrictedArea(){
	toastr.info('restrictedArea');
}

function judgeAction(s){
	// toastr.info('in judge action');
	switch(s){
		case 'login' : login(); break;
		case 'register' : register(); break;
		case 'userInfo' : userInfo(); break;
		case 'restrictedArea' : restrictedArea(); break;
		default : toastr.error('Wrong input! Retry'); break;
	}
}

$scope.go = function(s){
	// toastr.info(s);
	judgeAction(s);
}

    }
    ;
})();