/*function biggerPrice(limit, data) {
    //sort by highest price, return a slice based on the limit
    return data.sort((a, b) => a.price < b.price).slice(0, limit);
}*/


let arr = [
	{"name": "bread", "price": 100},
	{"name": "wine", "price": 138},
	{"name": "meat", "price": 15},
	{"name": "water", "price": 1}
	];

function f(limit ,data) {
	let prise = [];
	let answer = [];
	for (let key of data) {
		prise.push(key.price);
	}
	prise.sort((a,b) => b - a);

	for (let i = 0; i < limit ; i++) {
		for (let key of data) {
			if (key.price === prise[i]){
				answer.push(key);
			}
		}
	}
	// console.log(answer);
	return answer;
}

f(2 ,arr);
