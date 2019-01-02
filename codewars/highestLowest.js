function highAndLow(numbers) {
	let data = [];
	let answer = [];
	data = numbers.split(" ");
	data.sort((a,b) => a-b);

	answer.push(data[data.length-1]);
	answer.push(data[0]);

	return answer.join(" ");
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");