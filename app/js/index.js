var mainApp = angular.module('mainApp',['ngRoute','restangular']);
mainApp.config(function($routeProvider,RestangularProvider){
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
	});
	RestangularProvider.setBaseUrl('http://mock.ebay.com/');
})

mainApp.controller('mainCtrl',function($scope){
	$scope.message = 'Hello, this is a main controller';
})
mainApp.controller('aboutCtrl',function($scope,Restangular){
	$scope.message = 'Hello, this is a about controller';

	
	//基本用法
	/*var info = Restangular.one('data','info.json');
	info.get().then(function(data){
		console.log(data);
	})

	var mates = Restangular.one('data','mates.json');
	mates.getList().then(function(data){
		console.log(data);
	})*/

	var rest = Restangular.all('data');
	rest.one('info.json').get().then(function(data){
		console.log(data);
	})

	rest.one('mates.json').getList().then(function(data){
		console.log(data);
	})
})
mainApp.controller('contactCtrl',function($scope){
	$scope.message = 'Hello, this is a contact controller';
})