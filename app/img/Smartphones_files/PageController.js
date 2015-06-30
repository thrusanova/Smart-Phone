'use strict'

var phoneApp=angular.module("phoneApp", []).constant('author','Tanya Yaneva').controller('PageController',
 function PageController($scope,author)
 {
        $scope.author = author;
        $scope.year = 2015;
    }
);