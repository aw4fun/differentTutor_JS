


function curry(fn) {

	let slice = Array.prototype.slice;
	let oldArgs = slice.call(arguments, 0); // отбрасываем первый аргумент

	return function () {
		let newArgs = slice.call(arguments),
			args = oldArgs.concat(newArgs);

		return fn.apply(null, args); // вызываем функцию , для которой проводилось карирование
	}
}









function add(x, y) {
	return x + y;
}

let add10 = curry(add,10);

let r1 = add10(5);
let r2 = add10(10);

function sum(a, b, c) {
	return a + b + c;
}

let newSum = curry(sum, 1, 2);
let r3 = newSum(5);

console.log(r1 + " \t" + r2 + "\t" + r3);