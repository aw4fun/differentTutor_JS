/* добавляет свойства и методы в прототип*/

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


let carMixin = {
	revEngine() {
		console.log(`The ${this.engine} is doing Vroom Vroom`)
	}
};

const carFactory = new CarFactory();

const autoManufacturer = (type, model) => {
	switch (type) {
		case "car":
			return carFactory.createCar(model);
		case "suv":
			return suvFactory.createSuv(model);
	}
};

Object.assign(Car.prototype, carMixin);

const honda = autoManufacturer("car", "honda");

honda.revEngine();
console.log(Car.prototype);

