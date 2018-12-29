
let user = new Object( );

user.name = "userName";
user.getName = function () {
	return this.name;
};


// по сути конструктор Object = реализуется паттерном фабрика
// он может принимать параметр и делегировать вызов другому встроеному конструктору,
// вернув в результате объект другого типа.

let obj = new Object();
console.log(obj.constructor === Object);

let obj1 = new Object(1); // equal new Number(1);
console.log(obj1.constructor === Number); // true
console.log(obj1.toFixed(1)); // 1.0

let obj2 = new Object("SomeString");
console.log(obj2.constructor === String); // true

let obj3 = new Object(true);
console.log(obj3.constructor === Boolean); // true