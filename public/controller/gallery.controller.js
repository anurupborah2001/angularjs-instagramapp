/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('GalleryCtrl',['$scope','instagram','Lightbox',function($scope,instagram,Lightbox){
        console.log($scope);
      
        
        instagram.fetchUser(function(data){
            var getUserID = data.id;
            var imgArr = [];
            if(getUserID!=="undefined" || getUserID!==""){
                instagram.fetchPopularPhotos(getUserID,function(response){
                    console.log(response);
                    $scope.images  = response;
                    
                    angular.forEach(response,function(value,key){
                        imgArr.push(value.images.standard_resolution.url);
                    });
                    
                    $scope.openLightboxModal = function(index){
                        Lightbox.openModal(imgArr, index);
                    }
                    
                 });
               
            }
            
        });
         
        
        
}]);

