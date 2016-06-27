
(function(){
	Config = window.Config = {};
	window.App = angular.module('app',['Config','Utils','datatables','datatables.fixedcolumns'])
	.controller('WithFixedColumnsCtrl',function($q,$scope,DTOptionsBuilder){
		console.log('xxx');
		
		$scope.items = [];

		$scope.dtOptions = DTOptionsBuilder.newOptions()
		.withOption('scrollY', '300px')
		.withOption('scrollX', '100%')
        .withOption('scrollCollapse', true)
        .withOption('paging', true)
		.withFixedColumns
		({
            leftColumns: 1,
            rightColumns: 1
        });
		console.log(DTOptionsBuilder.newOptions().withOption);
	})













	//读取基本的json数据
	function createXMLHttpRequest(){
		if(window.ActiveXObject){
			return new ActiveXObject("Microsoft.XMLHTTP");    
		}else if(window.XMLHttpRequest){
			return new XMLHttpRequest();    
		}    
	}

	function registerController(ctrl,name){
		angular.module('app').controller(ctrl,['$scope','Foo',($scope,Foo)=>{
            
			const b = new Base();
			b.setMessage($scope,name);
			console.log(b);
			
			const h = new Home();
			h.getCountryList();
			
			Foo.getCountryList();
			const data=Foo.getData('/data');
			console.log(data);
			
		}])
	}
	
	const Request = createXMLHttpRequest();
	Request.onreadystatechange = function(){
		if(Request.readyState == 4) {  
			if(Request.status == 200) {  
				Config.routes =JSON.parse(Request.responseText);
				//registerController
				angular.forEach(Config.routes,(route)=>{
					const name = route.params.name;
					const ctrl = route.params.controller;
					registerController(ctrl,name);
				})
				angular.bootstrap(document,['app']);
			}  
		}  
	}
	Request.open('POST','/data/route.json',true);
	Request.send();

	
	
	class Base {
		constructor(){
		    
		}
		setMessage(scope,msg){
			scope.message = msg;
		}
		getCountryList(){
			console.log('getCountry');
		}
	}

    class Home extends Base{
		constructor(){
			super();
		}
		
		getCountryList(){
			super.getCountryList();
			console.log('home getCountry');
		}
	}

	
	
	
})();