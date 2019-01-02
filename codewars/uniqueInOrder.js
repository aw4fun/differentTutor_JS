var uniqueInOrder=function(iterable){
	//your code here - remember iterable can be a string or an array

	let container = [];

	if (iterable.length === 0) {
		return container;
	}

	container.push(iterable[0]);

	for (let i = 1; i < iterable.length; i++) {
		if (iterable[i] === iterable[i-1]) {
			continue;
		}

		container.push(iterable[i]);
	}


	return container;
};


console.log(uniqueInOrder(""));
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));