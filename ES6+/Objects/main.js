const x = 10;
const y = 20;

const point = {
	x,
	y,
	sayHello() {               // sayHello: function () {Console.log("Hello")};
		console.log("Hello");
	},

};

console.log(point);

const prefix = "some";
const data = {
	[prefix + "Name"]: "Andrey",
	[prefix + "Age"]: 30,

};

console.log(data);