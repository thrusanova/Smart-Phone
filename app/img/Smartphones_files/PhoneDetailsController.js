'use strict';

phoneApp.controller('PhoneDetailsController',
function PhoneDetailsController ($scope,phoneDatas){

	
phoneDatas.getPhone(1,function (data) {
	$scope.smartphone=data;
});
$scope.hideInformation=true;
$scope.ShowIfoText="Show";
$scope.showMoreInfo=showMoreInfo;

$scope.hideCapacity=true;
$scope.ShowCapacityText="Show";
$scope.showCapacity=showCapacity;
$scope.fontBoldclass={
	fontWeight:"bold"
};
$scope.blueTextClass="blue-text";
$scope.evenMemory="even-memory";
$scope.greyBackgroundClass="grey-background";

$scope.ShowModelsText ="View";
$scope.showAllModels=false;
$scope.showModels=showModels;

$scope.upVoteRating=upVoteRating;
$scope.downVoteRating=downVoteRating;

$scope.sort="rating";

function showModels () {
	if ($scope.showAllModels==false) {
		$scope.ShowModelsText="Hide";
		$scope.showAllModels=true;
	}
	else {	
	$scope.ShowModelsText="View";	
	$scope.showAllModels=false; 
	}

}

function showCapacity () {
	if ($scope.hideCapacity==true) {
		$scope.ShowCapacityText="Hide";
		$scope.hideCapacity=false;
	}
	else {	
	$scope.ShowCapacityText="Show";	
	$scope.hideCapacity=true; 
	}

}

function showMoreInfo () {
	if ($scope.hideInformation==true) {
		$scope.ShowIfoText="Hide";
		$scope.hideInformation=false;
	}
	else {	
	$scope.ShowIfoText="Show";	
	$scope.hideInformation=true; 
	}
}
function upVoteRating (model) {
	model.rating++;
}

function downVoteRating (model) {
	if (model.rating>0) {
		model.rating--;
	}
}
});

	