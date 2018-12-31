	let utils = {

		addListener: function (e, type, fn) {
      // минус в том, что каждый раз при добавлении обработчика мы делаем эти проверки
			// т е запустив код в браузере , он будет отрабатывать в браузере и нету смысла делать эти проверки

			if (typeof window.addEventListener === "function") { // DOM level 2
				e.addEventListener(type, fn, false);
			} else if (typeof document.attachEvent === "function") { // IE
				e.attachEvent("on" + type, fn);
			} else {
				e["on" + type] = fn; // DOM level 0
			}
		},

		removeListener: function (e, type, fn) {

			if (typeof window.addEventListener === "function") {
				e.addEventListener(type, fn, false);
			} else if (typeof document.attachEvent === "function") {
				e.attachEvent("on" + type, fn);
			} else {
				e["on" + type] = fn;
			}
		}
	};


	utils.addListener(window, "Load", function () {
		let testBtn = document.getElementById("test");
		let removeBtn = document.getElementById("removeHandler");

		// создали две кнопки

		function say() {
			console.log("Hello, World!");
		}

		utils.addListener(testBtn, "click", say); // вешаем обработчик на первую кноку

		utils.addListener(removeBtn, "click", function () { // вешаем обработчик на вторую кнопку
			utils.removeListener(testBtn, "click", say()); // на собитыии клик, открепляет с кнопки testBtn обработчик say
		})
	});