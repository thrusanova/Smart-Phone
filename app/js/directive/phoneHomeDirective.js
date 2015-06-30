'use strict';

phoneApp.directive('phoneHomeDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/phone-home-directive.html',
        scope: {
            smartphone: '=smart'
        }
    }
})