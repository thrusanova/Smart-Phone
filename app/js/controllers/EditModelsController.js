
phoneApp.controller('EditModelsController',
    function EditModelsController($scope, $location, $routeParams, $templateCache, phoneDatas) {

        var url = '/home';
        var modelToSave;

        if ($routeParams.modelId) {
            url ='/phone-details/' + $routeParams.id;
            phoneDatas
                .getPhone($routeParams.id)
                .$promise
                .then(getModel);
        }

        $scope.saveModel = function(model, newModelForm) {
            if (newModelForm.$valid) {
                modelToSave = model;
                phoneDatas
                    .getPhone($routeParams.id)
                    .$promise
                    .then(saveModel);
            }
        }

        $scope.cancelEdit = function() {
            $location.path(url);
        }

        $scope.toTop = function() {
            $location.hash('main-container');
            $anchorScroll();
        }

        function getModel(smartphone) {
            var models = smartphone.models;
            for(var i = 0; i < models.length;i++) {
                if (models[i].id == parseInt($routeParams.modelId)) {
                    $scope.model = models[i];
                    break;
                }
            }
        }

        function saveModel(smartphone) {
            var models = smartphone.models;

            if (!$routeParams.modelId) {
                if (!smartphone.models) {
                    smartphone.models = [];
                }

                modelToSave.id = smartphone.models.length + 1;
                modelToSave.rating = 0;
                smartphone.models.push(modelToSave);
            }
            else {
                for(var i = 0; i < models.length;i++) {
                    if (models[i].id == parseInt($routeParams.modelId)) {
                        models[i] = modelToSave;
                        break;
                    }
                }
            }

           phoneDatas.savePhone(smartphone);
            $templateCache.removeAll();
            $location.path(url);
        }
    }
);