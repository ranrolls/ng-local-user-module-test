(function() {
    'use strict';

    angular.module('root').factory('User', function ($http, $q, $ionicLoading) {

        self.status = false;

        self.userList = [
            {
                un : 'admin',
                p : 'admin'
            }
        ];

        function getStatus(){
            return self.status;
        }

        function addUser(un, p){
            self.userList.push({un : un, p : p});
        }

        function getUserList(){
            return self.userList;
        }   

        function getUserByName(n){
            var gotUser = false;
            for(var i = 0; i < self.userList.length; i++){
                if(self.userList[i].un == n){
                    gotUser = true;
                    break;
                }
            };
            return gotUser;
        }

        function checkUser(un, p){
            var gotUser = false;
            for(var i = 0; i < self.userList.length; i++){
                if(self.userList[i].un == un && self.userList[i].p == p){
                    gotUser = true;
                    break;
                }
            }
            return gotUser;
        }

        function login(){
            self.status = true;
        }

        function logout(){
            self.status = false;
        }

        function getData(url) {

            var deferred = $q.defer();
            var par = {};

            $http.get(url, par)
                .success(function(data, status) {
                    $ionicLoading.hide();
                    deferred.resolve(data);
                })
                .error(function() {
                    $ionicLoading.hide();
                    deferred.reject();
                });
         
            return deferred.promise;
        };

        return {
            getData : getData,
            login : login,
            logout : logout,
            getUserList : getUserList,
            getUserByName : getUserByName,
            checkUser : checkUser,
            addUser : addUser,
            getStatus : getStatus
        };
    });
})();