'use strict';

phoneApp.filter('status', function()  {
	return function  (input) {
		switch(input){
			case 1:return 'Sold out';break
			case 2:return 'available';break
		}
	}
})