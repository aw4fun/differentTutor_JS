
const dict = {
	duck: "quack",
	dog: "woof",
	mouse: "squeak",
	door: "squeak",
};

const res = Object.entries(dict)
	.filter( ([, value]) => {
	return value === "squeak";
	})
	.map( ([key]) => {
		return key;
	});

console.log(res);