 globalVar = globalVar || {}; // проверяем существует ли объект, и если он еще не создан, создаем его

	globalVar.define = function (namespace) { // принимаем строку,определяющую желаемое имя пространства имен
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




(function () {

	// utils.ajax name space creating
	let module1 = globalVar.define("globalVar.utils.ajax");
	console.log(module1 === globalVar.utils.ajax); // true

	// utils.dom name space creating
	let module2 = globalVar.define("utils.dom");
	console.log(module2 === globalVar.utils.dom); // true
	console.dir(globalVar); // отобразит свойства объекта для FireBug or Chrome Dev Tools
})();