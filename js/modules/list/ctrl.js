(function () {
    'use strict';

    angular.module('root').controller('ListCtrl', function ($scope, $state, toastr, User) {

    	var loggedIn = false;


function login(){
	toastr.info('login');
	if(User.getStatus()){
		toastr.info('user already logged in');
		$state.go('startup.userInfo');
	}else{
		$state.go('startup.login');
	}
}

function register(){
	toastr.info('register');
	if(User.getStatus()){
		toastr.info('Kindly logout to register as new user');
		$state.go('startup.userInfo');
	}else{
		$state.go('startup.register');
	}
}

function userInfo(){
	toastr.info('userInfo');
	if(User.getStatus()){
		$state.go('startup.userInfo');
	}else{
		toastr.info('Kindly login to get user information');
		$state.go('startup.login');
	}
}

function restrictedArea(){
	toastr.info('restrictedArea');
	if(User.getStatus()){
		toastr.info('Access to restrictedArea granted');
		$state.go('startup.restrictedArea');
	}else{
		toastr.info('No access to restrictedArea');
		toastr.info('Kindly login first');
	}
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

    })
    ;
})();