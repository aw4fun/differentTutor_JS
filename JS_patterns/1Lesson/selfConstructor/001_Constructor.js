function User(name) {
	this.name = name;
	this.hello = function () {
		return console.log(`Hello, my name is ${name}.`)
	}
}


// let user = new User("Ivan"); мы создаем объект, который инициализируется конструктором User