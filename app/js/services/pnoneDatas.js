phoneApp.factory('phoneDatas', function($resource) {
var resource=$resource('/data/phone/:id',{id:'@id'})
return {
    getPhone:function(id) {
    return resource.get({id:id});
  },
  savePhone:function(smartphone){

   if (!smartphone.id) {
   resource.query().$promise.then(function(data) {
   smartphone.id = data.length + 1;
    resource.save(smartphone);
     });
    }
     else {
        resource.save(smartphone);
      }
     },
  getAllPhones:function(){
    return resource.query();
  }
}
})

