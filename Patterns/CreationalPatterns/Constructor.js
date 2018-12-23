class Car {
	constructor(doors, engine, color){ // конструктор принимаемых параметров
		this.doors = doors; //поля класса
		this.engine = engine;
		this.color = color;
	}
}

class Suv extends  Car {
	constructor(doors, engine, color, wheels){ // конструктор принимаемых параметров
		super(doors, engine, color); // поля, которые я беру из супер класса
		this.wheels = wheels; // поля класса
	}
}


const civic = new Car(4, "v6", "grey");
const cx5 = new Suv(4,"V8", "red", 5);

console.log(civic);
console.log(cx5);