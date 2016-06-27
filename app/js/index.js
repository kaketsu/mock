'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	Config = window.Config = {};
	window.App = angular.module('app', ['Config', 'Utils', 'datatables', 'datatables.fixedcolumns']).controller('WithFixedColumnsCtrl', function ($q, $scope, DTOptionsBuilder) {
		console.log('xxx');

		$scope.items = [];

		$scope.dtOptions = DTOptionsBuilder.newOptions().withOption('scrollY', '300px').withOption('scrollX', '100%').withOption('scrollCollapse', true).withOption('paging', true).withFixedColumns({
			leftColumns: 1,
			rightColumns: 1
		});
		console.log(DTOptionsBuilder.newOptions().withOption);
	});

	//读取基本的json数据
	function createXMLHttpRequest() {
		if (window.ActiveXObject) {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		}
	}

	function registerController(ctrl, name) {
		angular.module('app').controller(ctrl, ['$scope', 'Foo', function ($scope, Foo) {

			var b = new Base();
			b.setMessage($scope, name);
			console.log(b);

			var h = new Home();
			h.getCountryList();

			Foo.getCountryList();
			var data = Foo.getData('/data');
			console.log(data);
		}]);
	}

	var Request = createXMLHttpRequest();
	Request.onreadystatechange = function () {
		if (Request.readyState == 4) {
			if (Request.status == 200) {
				Config.routes = JSON.parse(Request.responseText);
				//registerController
				angular.forEach(Config.routes, function (route) {
					var name = route.params.name;
					var ctrl = route.params.controller;
					registerController(ctrl, name);
				});
				angular.bootstrap(document, ['app']);
			}
		}
	};
	Request.open('POST', '/data/route.json', true);
	Request.send();

	var Base = function () {
		function Base() {
			_classCallCheck(this, Base);
		}

		_createClass(Base, [{
			key: 'setMessage',
			value: function setMessage(scope, msg) {
				scope.message = msg;
			}
		}, {
			key: 'getCountryList',
			value: function getCountryList() {
				console.log('getCountry');
			}
		}]);

		return Base;
	}();

	var Home = function (_Base) {
		_inherits(Home, _Base);

		function Home() {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this));
		}

		_createClass(Home, [{
			key: 'getCountryList',
			value: function getCountryList() {
				_get(Object.getPrototypeOf(Home.prototype), 'getCountryList', this).call(this);
				console.log('home getCountry');
			}
		}]);

		return Home;
	}(Base);
})();