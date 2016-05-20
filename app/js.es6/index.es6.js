
(function(){
	Config = window.Config = {};
	window.App = angular.module('app',['Config','j-service']);
	
	// App.factory('myFactory', function(){
	// 	let myFactory = {};
	// 	myFactory.name = 'myFactory';
	// 	return myFactory;
	// })
	
	// App.service('myService', function(){
	// 	this.name = 'myService';
	// })
	
	//读取基本的json数据
	function createXMLHttpRequest(){
		if(window.ActiveXObject){
			return new ActiveXObject("Microsoft.XMLHTTP");    
		}else if(window.XMLHttpRequest){
			return new XMLHttpRequest();    
		}    
	}

	function registerController(ctrl){
		App.controller(ctrl,['$scope','BasePoint',(scope,BasePoint)=>{
			console.log(BasePoint);
		}])
	}
	
	const Request = createXMLHttpRequest();
	Request.onreadystatechange = function(){
		if(Request.readyState == 4) {  
			if(Request.status == 200) {  
				Config.routes =JSON.parse(Request.responseText);
				//registerController
				angular.forEach(Config.routes,(route)=>{
					const ctrl = route.params.controller;
					registerController(ctrl);
				})
				angular.bootstrap(document,['app']);
			}  
		}  
	}
	Request.open('POST','/data/route.json',true);
	Request.send();

})();