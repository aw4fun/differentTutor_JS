// variable hoisting - подъем переменных. Следует избегать подобных функций - "Антипатерн"


let i = 10;

function myFunction() {


	console.log(i); //undefined
	console.log(test); //undefined


	for (let j = 0; j < 10; j++) {
		let test = i;
	}

	console.log(i); //10
	console.log(test); //9
}

myFunction();