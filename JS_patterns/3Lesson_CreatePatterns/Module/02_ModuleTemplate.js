// Шаблон отокрытия модуля

let App = {};

App.define = function (namespace) {
	let parts = namespace.split("."),
		parent = App;

	if (parts[0] === "App") {
		parts = parts.slice(1);
	}

	for (let i = 0; i < parts.length; i++) {


		if (typeof parent[parts[i]] === "undefined") {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
};



App.util.calc = (function () {
	//	закрытые члены
	let x,y;

	function _add() {
		return x + y;
	}

	function _setX(val) {
		x = val;
	}

	function _setY(val) {
		y = val;
	}

	return {
		// открытие доступа к методам
		add: _add,
		setX: _setX,
		setY: _setY
	}
})();


// _add - закрытые функции

(function () {
	let calc = App.util.calc;

	calc.setX(2);
	calc.setY(3);


	// если мы изменим calc.setX = null. Мы не модифицируем сам модуль

	console.log(calc.add);

})();