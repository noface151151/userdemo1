/// <reference path="angular.min.js" />

var app = angular.module("userapp", [])
.controller("UserController",function ($scope) {
    $scope.phonearr = [{ phone: "" }];
 
    $scope.Addphone = function () {
        if ($scope.phonearr.length < 5) {
    
            $scope.phonearr.push({phone:""});
        }
    }
    $scope.Removephone = function (index) {
        if ($scope.phonearr.length > 1) {
            
            $scope.phonearr.splice(index, 1)
        }
    }

    $scope.mailarr = [{ mail: "" }];

    $scope.Addmail = function () {
        if ($scope.mailarr.length < 5) {

            $scope.mailarr.push({ mail: "" });
        }
    }
    $scope.Removemail = function (index) {

        $scope.mailarr.splice(index, 1)
        
    }
    $scope.flag = true;
    $scope.submit = function () {
        $scope.flag = false;
    }
    $scope.edit = function () {
        $scope.flag = true;
    }

})

    