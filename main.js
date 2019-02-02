//
// let obj = {
// 	hello: function (name) {
// 		console.log(`Hello, ${name}!`);
// 	},
// 	helloAll : function (names) {
// 		names.forEach((name) => {
// 			this.hello(name);
// 		})
// 	}
// };
//
//
// let names = ["Andrey", "Anton", "Natasha"];
// obj.hello(names);
// obj.helloAll(names);


function foo() {
	let counter = 0;

	function bar() {
		++counter;
		console.log(counter);
	}

	return bar;
}

let action = foo();
action();
action();
action();
