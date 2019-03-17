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
//
//
// function foo() {
// 	let counter = 0;
//
// 	function bar() {
// 		++counter;
// 		console.log(counter);
// 	}
//
// 	return bar;
// }
//
// let action = foo();
// action();
// action();
// action();

// (function () {
// 	let a = b = 3;
// 	debugger;
// })();
//
// console.log(`a defined? ` + (typeof a !== "undefined"));
// console.log(`b defined? ` + (typeof b !== "undefined"));

/////////////////////////////////////
// function User(f,l) {
// 	this.f = f;
// 	this.l = l;
//
// 	this.print = function () {
// 		console.log(this.f + " " + this.l);
// 		debugger;
// 	}
// }
//
// let u = new User("Andrey", "Belokon");
// let print = u.print;
// let print1 = u.print;
//
// customBind(print, u, [])();
//
// print1.bind(u)();
//
// function customBind (fn, context, ...args) {
// 	return function () {
// 		fn.apply(context, args)
// 	}
// }
////////////////////////////////////////////////////////////////

function Manager(f, l) {
	User.apply(this, arguments)
}

function User(f,l) {
	this.f = f;
	this.l = l;

	this.print = function () {
		console.log(this.f + " " + this.l);
		debugger;
	}
}

Manager.prototype = new User;
Manager.prototype.test = 1;

// m > Manager.prototype > User.prototype > Object

let u = new User("Ivan", "Ivanov");
let m = new Manager("test", "test");
console.log(u.test);
