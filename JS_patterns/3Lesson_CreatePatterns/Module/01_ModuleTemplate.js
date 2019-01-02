
let App = {};

App.define =  function (namespace) { // принимаем строку,определяющую желаемое имя пространства имен
	let parts = namespace.split("."); // разбиваем строку на массив
	let parent = App; // содержит ссылку на объект globalVar
	let i;

	//

	if (parts[0] === App) { // проверка на наличие в начале namespace "globalVar" globalVar.cash.rub
		parts = parts.slice(1); // globalVar.cash.rub => cash.dollar
	}


	//


	for ( i = 0; i < parts.length ; i++) { // перебор на наличие свойств

		if (typeof parent[parts[i]] === "undefined") {
			parent[parts[i]] = {};
		}

		parent = parent[parts[i]]
	}

	return parent;
};



// declare namespace
App.define("util.calc");

App.util.calc = (function () {
		let x,y;

	return {
		add: function () {
			return x + y;
		}	,
		setX: function (val) {
			x = val;
		} ,
		setY: function (val) {
			y = val;
		}
	}
})();


(function () {
	let calc = App.util.calc;

	calc.setX(2);
	calc.setY(3);

	console.log(calc.add());
})();