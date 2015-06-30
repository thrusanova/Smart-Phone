'use strict';

phoneApp.directive('modelDetails', function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/model-details-directive.html',
        scope: {
            model: '=model'
        }
    }
});