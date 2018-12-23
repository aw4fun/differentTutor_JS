/*
Декоратор (англ. Decorator) — структурный шаблон проектирования, предназначенный для динамического
подключения дополнительного поведения к объекту. Шаблон Декоратор предоставляет гибкую альтернативу
практике создания подклассов с целью расширения функциональности.
*/

// class Coffee { //(класс для последующего декорирования)
// 	constructor(cost) {
// 		this.cost = function () {
// 			return 1;
// 		}
// 	}
// }



function Cofee() {
	this.cost = function () {
		return 1;
	}
}


//decorator A
function Milk(cofee) {
	this.cost = function () {
		return cofee.cost + 0.5;
	}
}

//decorator B
function Whip(cofee) {
	this.cost = function () {
		return cofee.cost() + 0.7;
	}
}

//decorator C
function Sprinkles(cofee) {
	this.cost = function () {
		return cofee.cost() + 0.2;
	}
}

////// using


let coffee = new Cofee();
coffee = new Sprinkles(coffee);
coffee = new Whip(coffee);
coffee = new Milk(coffee);

console.log(coffee.cost());