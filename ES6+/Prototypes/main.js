function Animal(name, voice) {
	this.name = name;
	this.voice = voice;
}

Animal.prototype.say = function () {
	console.log(`${this.name} voices is: ${this.voice}`);
};

const Dog = new Animal("Dog", "woof");
const Cat = new Animal("Cat", "meow");
const Duck = new Animal("Duck", "quack");

Dog.say();
Cat.say();
Duck.say();


console.dir({Object});