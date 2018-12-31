// Самоопределяемая функция


// при первом запуске она себя инициализирует "initial" и переопределяет поведение
// при повторном она уже будет с измененным поведением "initial finished"
// при каждем последующем вызове функция будет выводить "initial finished"




let initialize = function () {

	console.log("initialize");

	// initializing

	initialize = function () {

		console.log("initialize is finished");
		// initializing finished
	}

};

initialize();
initialize();