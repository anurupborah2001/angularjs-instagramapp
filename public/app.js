/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 var app = angular.module('instagramApp',['ngRoute','ngResource','bootstrapLightbox']);
 
 app.config(['$routeProvider',function($routeProvider){
         $routeProvider.when("/gallery",{
              templateUrl : "views/gallery.view.html",
              controller : 'GalleryCtrl'
         }).otherwise({
              redirectTo : '/gallery'
         });
 }]);


