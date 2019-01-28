export function subSystem1() {
	this.method1 = function () {
		console.log("called subSystem1.method1");
	}
}


export function subSystem2() {
	this.method2 = function () {
		console.log("called subSystem1.method2");
	};
	this.method22 = function () {
		console.log("called subSystem1.methodB");
	};
}


