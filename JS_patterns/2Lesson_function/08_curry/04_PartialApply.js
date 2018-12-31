// частичное применение - передача функции не всех аргументов, а только ее части
// процесс, в результате которого появляется новая функция, обладающая возможностью частичного применения
//

function add(x, y) {
	let oldX = x, oldY = y;

	if (typeof oldY === "undefined") {
		return function (newY) {
			return oldX + newY;
		}
	}

	return x + y; // полное применение

}

console.log(typeof add(10)); // return [Function]

console.log(add(1)(2));
