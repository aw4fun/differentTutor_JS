function findNodes() {
	let nodes = [];
	let pArray = [];

	pArray = document.querySelector("p");

	for (let i = 0; i < pArray.length; i++) {
		nodes.push(pArray[i]);
	}

	return nodes;
}


function makeBorder(nodes) {

	let i = 0; max = nodes.length;
	for (; i < max; i +=1) {
		nodes[i].style.border = "solid 1px green";
	}
}

makeBorder(findNodes ());