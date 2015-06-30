'use strict';    
var phoneApp = angular.module('phoneApp', ['ngResource', 'ngRoute'])
.config(function($routeProvider) {
        $routeProvider
        .when('/home',{
        	templateUrl:'templates/home.html'
        })
          .when('/phone-details/:id', {
                templateUrl: 'templates/phone-details.html'
            })
            .when('/edit-phone', {
                templateUrl: 'templates/edit-phone.html',controller:'EditPhoneController'
            })
              
            .when('/add-phone', {
                templateUrl: 'templates/edit-phone.html'
            })
          .when('/list-phones', {
                templateUrl: 'templates/list-phones.html'
            })
           
            .when('/phone-details/:id/add-model', {
                templateUrl: 'templates/edit-model.html'
            })
            .when('/phone-details/:id/edit-model/:modelId', {
                templateUrl: 'templates/edit-model.html'
            })
            .when('/all-models', {
                templateUrl: 'templates/all-models.html'
            })
            .when('/all-models/filter/:smartphone', {
                templateUrl: 'templates/all-models.html'
            })
            .otherwise({redirectTo:'/home'});
            
            
        }).constant('author','Tanya Yaneva');
 
            