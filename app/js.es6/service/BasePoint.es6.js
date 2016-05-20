class BasePoint{
    constructor(){
		this.name = 'BasePoint';
		console.log('This is BasePoint constructor');
	}
}

angular.module('j-service').service('BasePoint',BasePoint);