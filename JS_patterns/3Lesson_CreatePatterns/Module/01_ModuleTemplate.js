
let App = {};

App.define =  function (namespace) { // принимаем строку,определяющую желаемое имя пространства имен
	let parts = namespace.split("."); // разбиваем строку на массив
	let parent = globalVar; // содержит ссылку на объект globalVar
	let i;

	//

	if (parts[0] === globalVar) { // проверка на наличие в начале namespace "globalVar" globalVar.cash.rub
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

