'use strict';

(function () {
	Config = window.Config = {};
	window.App = angular.module('app', ['Config']);
	//读取基本的json数据
	function createXMLHttpRequest() {
		if (window.ActiveXObject) {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		}
	}

	function registerController(ctrl) {
		angular.module('app').controller(ctrl, ['$scope', 'BasePoint', function (scope, BasePoint) {
			console.log();
		}]);
	}

	var Request = createXMLHttpRequest();
	Request.onreadystatechange = function () {
		if (Request.readyState == 4) {
			if (Request.status == 200) {
				Config.routes = JSON.parse(Request.responseText);
				//registerController
				angular.forEach(Config.routes, function (route) {
					var ctrl = route.params.controller;
					registerController(ctrl);
				});
				angular.bootstrap(document, ['app']);
			}
		}
	};
	Request.open('POST', '/data/route.json', true);
	Request.send();
})();