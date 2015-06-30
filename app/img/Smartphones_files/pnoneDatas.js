phoneApp.factory('phoneDatas', function($http,$log) {

return {
	getPhone:function  (id,successcb) {
		$http({method: 'GET', url: '/data/phone/'+id}).
  success(function(data, status, headers, config) {
   successcb(data);
  }).
  error(function(data, status, headers, config) {
    $log.error(data);
  });
	}
}
})

