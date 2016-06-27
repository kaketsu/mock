angular.module('Config',['ngRoute','restangular'])
.config(($routeProvider, $locationProvider, $logProvider,RestangularProvider)=>{
	console.log('This is config place');
	/*
	angular.forEach(Config.routes,(route)=>{
		const ctrl = route.params.controller;
		$routeProvider.when(route.url,{
			templateUrl: route.params.templateUrl,
			controller: route.params.controller
		})
	})
	*/
	$routeProvider
	.when('/home',{
		templateUrl : 'template/home.html',
		controller  : 'homeCtrl'
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

	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
	});
	
}).run(()=>{
	console.log('This is run place');

	
})


angular.module('Utils',[])
.service('Foo',function(){
	 this.getCountryList = function(){
		 console.log('getCountryList');
	 }
	 this.getData = function(url,params){
		 console.log('getdata');
		 return getRequest(url);
	 }
	 function getRequest(url){
		 return 'get'+url
	 }
})

