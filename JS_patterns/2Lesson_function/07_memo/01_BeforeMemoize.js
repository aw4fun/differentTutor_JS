

function calcfib(x) {
	if (x > 1) {
		return calcfib(x-1) + calcfib(x-2)
	} else {
		return 1;
	}
}


for (let i = 0; i < 10; i++) {
	console.log(`${i} = ${calcfib(i)}`);
}