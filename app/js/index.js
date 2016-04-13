var mainApp = angular.module('mainApp',['ngRoute']);
mainApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'template/home.html',
     	controller  : 'mainCtrl'
	})
	.when('/about',{
		templateUrl : 'template/about.html',
      	controller  : 'aboutCtrl'
	})
	.when('/contact',{
		templateUrl : 'template/contact.html',
      	controller  : 'contactCtrl'
	})
})

mainApp.controller('mainCtrl',function($scope){
	$scope.message = 'Hello, this is a main controller';
})
mainApp.controller('aboutCtrl',function($scope){
	$scope.message = 'Hello, this is a about controller';
})
mainApp.controller('contactCtrl',function($scope){
	$scope.message = 'Hello, this is a contact controller';
})