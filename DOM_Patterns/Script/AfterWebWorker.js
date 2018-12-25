window.onload = function () {
	document.getElementById("startButton").onclick = function () {
		// Create new stream
		let worker = new Worker("fibonachiWorker.js");


		// Create listener, for receive msg from the stream

		worker.addEventListener("message", function (e) {
			document.getElementById("output").innerHTML += e.data + "<br />";
		}, false);

		// Start stream
		worker.postMessage("");
	}
};