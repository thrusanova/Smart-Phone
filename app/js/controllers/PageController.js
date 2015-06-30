'use strict'


phoneApp.constant('author','Tanya Yaneva').controller('PageController',
 function PageController($scope,author)
 {
        $scope.author = author;
        $scope.year = 2015;
    }
);