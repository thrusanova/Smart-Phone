'use strict';

phoneApp.directive('searchPhones',function () {
	return {
		restrict:'EA',
		templateUrl:'/templates/directives/search-phone.html',
		replace:true,
	scope: {
		search:''
		}
	}
})