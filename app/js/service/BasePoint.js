'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasePoint = function BasePoint() {
				_classCallCheck(this, BasePoint);

				this.name = 'BasePoint';
				console.log('This is BasePoint constructor');
};

angular.module('j-service').service('BasePoint', BasePoint);