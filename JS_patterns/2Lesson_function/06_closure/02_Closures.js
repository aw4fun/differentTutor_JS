function makeFunc() {
	let str = "Hello, World!";
	function displayStr() {
		console.log(str);
	}

	return displayStr; // функция возвращается , но не запускается
}

// Замыкание - функция, в которой находятся перменные, объявленные вне тела этой функции
// Замыкание - функция и окружение, в которой была создана функция
let myFunc = makeFunc(); // по сути мы передаем функцию displayStr и все ее окружение, чтобы она работала
myFunc();