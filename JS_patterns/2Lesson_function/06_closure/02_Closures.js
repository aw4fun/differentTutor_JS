function makeFunc() {
	let str = "Hello, World!";
	let i = 0;
	function displayStr() {
		i++;
		console.log(str + i);
	}

	return displayStr; // функция возвращается , но не запускается
}

// Замыкание - функция, в которой находятся перменные, объявленные вне тела этой функции
// Замыкание - функция и окружение, в которой была создана функция
let myFunc = makeFunc(); // по сути мы передаем функцию displayStr и все ее окружение, чтобы она работала

myFunc();
myFunc();
myFunc();