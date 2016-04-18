'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasePoint = function BasePoint(x, y) {
	_classCallCheck(this, BasePoint);

	this.x = x;
	this.y = y;
	console.log('This is BasePoint constructor');
};