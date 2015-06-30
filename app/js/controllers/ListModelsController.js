'use strict';

phoneApp.controller('ListModelsController',
    function ListModelsController($scope, $routeParams, phoneDatas) {

        if ($routeParams.smartphone) {
            $scope.search = $routeParams.smartphone;
        };

        phoneDatas
            .getAllPhones()
            .$promise
            .then(function (smartphones) {
                var allModels = [];
                for (var i = 0; i < smartphones.length; i++) {
                    var models = smartphones[i].models;
                    if (models) {
                        for (var j = 0; j < models.length; j++) {
                            models[j].smartphone = smartphones[i].name;
                            models[j].smartphoneId = smartphones[i].id;
                            allModels.push(models[j]);
                        }
                    }
                }

                $scope.models = allModels;
            });
    }
);