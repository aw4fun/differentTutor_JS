// если функция принимает несколько параметров, по уму callback передать последним параметром

function doOperation(callback) {

	// выполнение некоторых операций, например гет запрос на сервер, по завершении которого будет запущена callback();


	callback();
}

function showAlert() {
	console.log("Hello from callback");
}


doOperation(showAlert);