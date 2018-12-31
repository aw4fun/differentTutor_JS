// теряется контекст this


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


let app = {};
app.color = "green";
app.borderStyle = "solid";
app.borderWidth = "1px";

// Изменение найденного узла

app.makeBorder = function (node) {
	node.style.border = this.borderStyle + " " + this.borderWidth + " " + this.color;
};


findNodes(app.makeBorder);