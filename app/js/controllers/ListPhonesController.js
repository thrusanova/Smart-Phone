phoneApp.controller('ListPhonesController',
    function ListPhonesController($scope, $route, phoneDatas) {
        $scope.smartphones = phoneDatas.getAllPhones();

        $scope.smartphones.range = function() {
            var range = [];
            for (var i = 0; i < $scope.smartphones.length; i = i + 3) {
                range.push(i);
            }
            return range;
        }
    }
);