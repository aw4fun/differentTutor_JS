


let utils = {
	addListener: null,
	removeListener: null
};

// проверяем типо браузера и определяем обработчики , согласно типу браузера

if (typeof window.addEventListener === "function") {
	utils.addListener = function (e, type, fn) {
		e.addEventListener(type, fn, false); // false - "Событийная модель"
	};

	utils.removeListener = function (e, type, fn) {
		e.removeEventListener(type, fn, false);
	}

} else if (typeof document.attachEvent === "function") {
	utils.addListener = function (e, type, fn) {
		e.attachEvent("on", + type, fn);
	};

	utils.removeListener = function (e, type, fn) {
		e.detachEvent("on" + type, fn);
	}

} else {
	utils.addListener = function (e, type, fn) {
		e["on" + type] = fn;
	};
	utils.removeListener = function (e, type, fn) {
		e["on" + type] = null;
	}
}