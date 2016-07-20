/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.factory('instagram', ['$resource', function($resource){
    var accessToken = "3539450851.1677ed0.542b7e7861754d9aaaba5d7c0cabb2ff";
     var fetchUserMethod = function(callback) {
       var api = $resource('https://api.instagram.com/v1/users/self/?access_token=:access_token&callback=JSON_CALLBACK',{
                access_token : accessToken
            },{
                fetch : { method : 'JSONP' }  
            });
            
            api.fetch(function(response){
                callback(response.data);
            });
    };
    var fetchPopularPhotosMethod = function(id,callback) {
              var mediaAPI = 'https://api.instagram.com/v1/users/:id/media/recent?access_token=:access_token&callback=JSON_CALLBACK';
               var api = $resource(mediaAPI,{
                    access_token : accessToken,
                    id : id
                },{
                    query: {method: 'GET', isArray:false},
                    fetch : { method : 'JSONP' }  
                });

                api.fetch(function(response){
                   callback(response.data);
                });
               
    };
    
    
    
    return {
        
        fetchUser : fetchUserMethod,
        fetchPopularPhotos :   function (data,callback) {
              fetchPopularPhotosMethod(data,callback);
         }
    }
}]);

