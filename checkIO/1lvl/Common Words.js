let text = "one,two,three";
let text2 = "four,five,one,two,six,three";



function commonWords(first, second) {
	let result = [];
	first = first.split(",");
	second = second.split(",");

	first.forEach((key) => {
		second.forEach((key1) => {
			if (key === key1){
				result.push(key);
			}
		})
	});
	result.sort((a,b) => a > b);
	return result.join(",");
}

commonWords(text, text2);