
class Animal {
	constructor(name, voice){
		this.name = name;
		this.voice = voice;
	}

	say() {
		console.log(this.name, "goes", this.voice);
	}
}

class Bird extends Animal {
	constructor(name, voice, canFly){
		super(name, voice);
		// super.say(); // перманентно при создании юзанет say() из супер класса
		this.canFly = canFly;
	}

	say() { // Overriding say() function
		console.log(`Bird's dont like to talk`);
	}

	flySkills() {
		this.canFly ? console.log(`I can fly`)
			: console.log(`I can't fly`)
	}

}

const dog = new Animal("Dog", "woof");
const duck = new Bird("Duck", "quack", true);

dog.say();
duck.flySkills();
duck.say();