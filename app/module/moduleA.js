import ServiceA from "../service/a";
import ServiceB from "../service/b";

export default angular.module("moduleA",[])
.service("ServiceA",ServiceA)
.service("ServiceB",ServiceB)
.name