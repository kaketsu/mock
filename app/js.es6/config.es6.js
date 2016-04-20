angular.module('Config',['ngRoute','restangular'])
.config(($routeProvider, $locationProvider, $logProvider,RestangularProvider)=>{
	console.log('This is config place');
	angular.forEach(Config.routes,(route)=>{
		const ctrl = route.params.controller;
		$routeProvider.when(route.url,{
			templateUrl: route.params.templateUrl,
			controller: route.params.controller
		})
	})
	/*$routeProvider
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
	});*/

	RestangularProvider.setBaseUrl('http://mock.ebay.com/');

	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
	});
}).run(()=>{
	console.log('This is run place');

	
})

