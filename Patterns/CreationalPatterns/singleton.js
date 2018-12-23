let instance = null;

class Car {
	constructor(doors, engine, color){ // конструктор принимаемых параметров
		if (!instance) {
			this.doors = doors; //поля класса
			this.engine = engine;
			this.color = color;
			instance = this
		} else {
			return instance;
		}
	}
}

const civic = new Car(4, "v6", "grey");
const  honda = new Car(2, "v4", "red");

console.log(civic);
console.log(honda);
console.log(instance);

/*возвращает только один объект класса*/