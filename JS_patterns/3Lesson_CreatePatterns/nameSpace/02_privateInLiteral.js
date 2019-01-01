// incapsulate

let obj1;

(function () {

	let name = "John Doe";

	obj1 = {
		getName: function () {
			return name;
		}
	}
})();

console.log(obj1.name);
console.log(obj1.getName());


let obj2 = (function (name) {

	name;

	return {
		getName: function () {
			return name;
		}
	}
})("Egor");


console.log(obj2.name);
console.log(obj2.getName());