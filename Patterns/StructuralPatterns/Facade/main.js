/*
Шаблон фасад (англ. Facade) — структурный шаблон проектирования, позволяющий скрыть сложность системы путём
сведения всех возможных внешних вызовов к одному объекту, делегирующему их соответствующим объектам системы
 */

import {subSystem1, subSystem2} from "./subSystem"


function Facade () {
	let s1 = new subSystem1();
	let s2 = new subSystem2();

	this.m1 = function () {
		console.log("called Facade.m1");
		s1.method1();
		s2.method2();
	};


	this.m2 = function () {
		console.log("called Facade.m2");
		s2.method22();
	};
}


function test() {
	let facade = new Facade();
	facade.m1();
	facade.m2();
}


test();