function makeAdder(x) {

	return function (y) {
		return x + y;
	};
}

//


// Замыкание с переменной X = 5
let add5  = makeAdder(5);

// Замыкание с переменной Х = 10
let add10 = makeAdder(10);


console.log(add5(2)); // 7

console.log(add10(2)); //12


console.log(makeAdder(3,)(2)); // 5