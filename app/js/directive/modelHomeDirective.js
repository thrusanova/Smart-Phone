'use strict';
phoneApp.directive('modelHomeDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/model-home-directive.html',
        scope: {
            model: '='
        }
    }
})

