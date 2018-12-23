

class Car {
	constructor(doors, engine, color){ // конструктор принимаемых параметров
		this.doors = doors; //поля класса
		this.engine = engine;
		this.color = color;
	}
}

class CarFactory {
	createCar(type) {
		switch (type) {
			case "civic":
				return new Car(4, "v6", "grey");
			case "honda":
				return new Car(2, "v4", "red");
		}
	}
}

class Suv {
	constructor(doors, engine, color){ // конструктор принимаемых параметров
		this.doors = doors; //поля класса
		this.engine = engine;
		this.color = color;
	}
}

class SuvFactory {
	createSuv(type) {
		switch (type) {
			case "cx5":
				return new Suv(4, "v8", "gold");
			case "santa fe":
				return new Suv(7, "v12", "red");
		}
	}
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
	switch (type) {
		case "car":
			return carFactory.createCar(model);
		case "suv":
			return suvFactory.createSuv(model);
	}
}

const cx5 = autoManufacturer("suv", "cx5");

console.log(cx5);

