class BasePoint {
	constructor(x,y){
		this.x = x;
		this.y = y;
		console.log('This is BasePoint constructor');
	}
}

class UserPoint extends BasePoint{ 
	constructor(x,y,z){
		super(x,y);
		this.z = z;
	}
}

let base = new BasePoint('hello','world');
let user = new UserPoint('hello','user','huajie');

console.log(base);
console.log(user);