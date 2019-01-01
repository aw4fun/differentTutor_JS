let obj1 = {
	name: "John Doe",
	getName: function () {
		return this.name;
	}
};


console.log(obj1.name); // open prop
console.log(obj1.getName()); // open prop


class Obj3 {
	constructor(takeName) {
		let name = takeName;
		this.getName = function () {
			return name;
		}
	}
}

let obj3 = new Obj2("Vasilisa");
console.log(obj3.name);
console.log(obj3.getName());

function Obj2(takeName) {
	let name = takeName;

	this.getName = function () {
		return name;
	}
}


let obj2 = new Obj2("Sergei");
console.log(obj2.name);
console.log(obj2.getName());