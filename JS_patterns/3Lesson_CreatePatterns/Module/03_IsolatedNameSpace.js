// Шаблон изолированного пространства имен

function App() {

	// преобразовываем аргументы в массив
	let args = Array.prototype.slice.call(arguments),
	// callback
		callback = args.pop(), // получаем доступ к последнему аргументу
		// имена омдулей могут передаться как один массив, или через запятую
		modules = (args[0] && typeof args[0] === "string") ? args : args[0], // получение информации о модулях
		i;


	// проверка, была ли функция вызвана с ключевым словом new

	if (!(this instanceof App)) {
		return new App(modules, callback);
	}

	// props
	this.productName = "Isolated Namespace Sample";
	this.version = "1.0.0.0";


	//
	if (!modules || modules === "*") {
		modules = [];

		for (i in App.modules) {

			if (App.modules.hasOwnProperty(i)){
				modules.push(i);
			}
		}
	}

	for (let j = 0; j < modules.length; j++) {
		App.modules[modules[i]](this);
	}

	callback(this);
}


// module defenition
App.modules = {};


// DOM module
App.modules.dom = function (box) {
	box.getElement =function (e) {
		console.log("call to get element");
	};
	box.create = function (e) {
		console.log("call to create element");
	};
	box.setStyle = function () {
		console.log("call to set style")
	};
	box.getStyle = function () {
		console.log("call to get style");
	};
};

// Event listener module
App.modules.events = function (box) {
	box.addListener = function (elem, event) {
		console.log("call to add listener")
	};
	box.removeListener = function (elem, event) {
		console.log("call to remove listener")
	};
};

// Ajax module
App.modules.ajax = function (box) {
	box.sendRequest = function (data) {
		console.log("call to send Request");
	}
};

// создание пространства имен, которое использует все модули Ajax Events DOM

App(function (box) {
	let e = box.getElement("div1");
	box.addListener(e, "click");

	box.sendRequest("hello world");

	console.log(box.productName + " " + box.version);
});


// создание пространства имен, которое использует Ajax

App("ajax", "dom", function (box) {
	box.sendRequest("request");
});