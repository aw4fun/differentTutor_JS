// функция представляет локальную область видимости.
// самостоятельно запускается и не требует имени

(function () {
	let days = [0, 1, 2, 3, 4, 5, 6];
	let today  = new Date();
	let msg = `Today is ${days[today.getDay()]}`;

	 console.log(msg);
})();