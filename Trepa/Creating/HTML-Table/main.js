const elem = document.querySelector("#elem");

const createTable = (parent, cols , rows) => {
	console.log(typeof parent);
	console.log(typeof cols);
	console.log(typeof rows);

	let table = document.createElement("table");

	let booster = 1;
	for (let i = 0; i < rows ; i++) {
		let tr = document.createElement("tr");


		for (let j = 0; j < cols; j++) {

			let td = document.createElement("td");
			td.textContent = booster + j;
			tr.appendChild(td);
		}
		booster += cols;
		table.appendChild(tr);
	}

	return parent.append(table);
};

createTable(elem,6 ,5);

let tds = document.querySelectorAll("td");

for (let i = 0; i < tds.length; i++) {
	tds[i].addEventListener("click",  function funs () {
		let input = document.createElement("input");
		input.value = this.innerHTML;
		this.innerHTML = "";
		this.appendChild(input);
		input.focus();

		input.addEventListener("blur", () => {
			this.innerHTML = input.value;
			this.addEventListener("click", funs)
		});

		this.removeEventListener("click", funs);
	})

}


