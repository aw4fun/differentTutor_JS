function findNodes(callback) {
	let nodes = [];
	// let pArray = [];
	let found;

	let pArray = document.querySelector("p");

	// проверка типа callback на функцию

	if (typeof callback != "function") {
		callback = false;
	}

	for (let i = 0; i < pArray.length; i++) {
		found = pArray[i];

		if (callback) {
			callback(found);
		}
		nodes.push(found);
	}
	return nodes;
}







function makeBorder(node) {
	node.style.border = "solid 1px green";
}


findNodes(makeBorder);