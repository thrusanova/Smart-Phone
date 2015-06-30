'use strict';

phoneApp.controller('HomeController',
    function HomeController($scope, phoneDatas) {
        phoneDatas
            .getAllPhones()
            .$promise
            .then(function (smartphone) {
                var latestPhones = [];
                var latestModels= [];

                for (var i = smartphone.length - 1; i >= 0; i--) {
                    if (latestPhones == 3 && latestModels == 3) {
                        break;
                    }

                    if (latestPhones.length < 3) {
                        latestPhones.push(smartphone[i]);
                    }

                    var models = smartphone[i].models;
                    if (models && latestModels.length < 3) {
                        for (var j = models.length - 1; j >= 0; j--) {
                            if (latestModels.length == 3) {
                                break;
                            }

                            latestModels.push(models[j]);
                        }
                    }
                }

                $scope.smartphone = latestPhones;
                $scope.models = latestModels;
            });
    }
);