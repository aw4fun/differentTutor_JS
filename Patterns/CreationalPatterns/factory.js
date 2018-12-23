

class Car {
	constructor(doors, engine, color){ // конструктор принимаемых параметров
		this.doors = doors; //поля класса
		this.engine = engine;
		this.color = color;
	}
}

class carFactory {
	createCar(type) {
		switch (type) {
			case "civic":
				return new Car(4, "v6", "grey");
			case "honda":
				return new Car(2, "v4", "red");
		}
	}
}



const factory = new carFactory();
const honda = factory.createCar("honda");

console.log(honda);

/*возвращает объект класса согласно кейсу*/