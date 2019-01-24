
let obj = {
	hello: function (name) {
		console.log(`Hello, ${name}!`);
	},
	helloAll : function (names) {
		names.forEach((name) => {
			this.hello(name);
		})
	}
};


let names = ["Andrey", "Anton", "Natasha"];
obj.hello(names);
obj.helloAll(names);