'use strict';


phoneApp.controller('EditPhoneController',
	function EditPhoneController ($scope,phoneDatas) {
	$scope.savePhone=function  (smartphone,newPhoneForm) {
		if (newPhoneForm.$valid) {
			phoneDatas.savePhone(smartphone);
			alert("smartphone "+smartphone.name+ " "+ "saved!");
		}
		else {
			alert('invalid form');
		}
		
	}
	$scope.cansel=function  () {
		alert('cansel');
	}
})