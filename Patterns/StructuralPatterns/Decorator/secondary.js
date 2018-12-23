function Component() {
	this.operation = function() { };
	this.getPrice = function() { };
	this.setPrice = function() { };
}

function ConcreteComponent() {
	var price = 10;

	this.operation = function() {
		price += 4;
		console.log("ConcreteComponent.operation, price: "+ price);
	};
	this.getPrice = function() {
		return price;
	};
	this.setPrice = function(val) {
		price = val;
	};
}

ConcreteComponent.prototype = new Component();
ConcreteComponent.prototype.constructor = ConcreteComponent;

function Decorator() {
	var component;

	this.setComponent = function(val) {
		component = val;
	};
	this.getComponent = function() {
		return component;
	};
	this.operation = function() {
		component.operation();
	};
	this.getPrice = function() {
		return component.getPrice();
	};
	this.setPrice = function(val) {
		component.setPrice(val);
	};
}
Decorator.prototype = new Component();
Decorator.prototype.constructor = Decorator;

function ConcreteDecoratorA() {
	Decorator.call(this);
	var operation = this.operation; // ссылка на метод, определенный в Decorator

	this.operation = function() {
		this.setPrice(this.getPrice() + 3);
		console.log("ConcreteDecoratorA.operation, price: "+ this.getPrice());
		operation();
	};
}

function ConcreteDecoratorB() {
	var dublicate = this; // ссылка на инстанцирующийся объект (т.к. this может меняться)
	Decorator.call(this);
	var operation = this.operation; // ссылка на метод, определенный в Decorator

	this.operation = function() {
		this.setPrice(this.getPrice() + 1);
		console.log("ConcreteDecoratorB.operation, price: "+ this.getPrice());
		addedBehavior();
		operation();
	};

	function addedBehavior() {
		dublicate.setPrice(dublicate.getPrice() + 2);
		console.log("addedBehavior, price: "+ dublicate.getPrice());
	}
}

// использование

c = new ConcreteComponent();
d1 = new ConcreteDecoratorA();
d2 = new ConcreteDecoratorB();

console.log("изначальная цена: " + c.getPrice()); // 10

d1.setComponent(c);
d2.setComponent(d1);

d2.operation();

console.log("цена после преобразования: " + c.getPrice()); // 20