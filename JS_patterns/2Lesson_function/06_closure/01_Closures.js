
function init() {

	let str = "Hello, World!";
	let i = 0;

	function displayStr() {
		i ++;
		console.log(str + i);
	}

	return displayStr;
}

let test = init();

test();
test();

