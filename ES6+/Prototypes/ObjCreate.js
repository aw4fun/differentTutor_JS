const animal = {
	say() {
		console.log(this.name, "goes", this.voice);
	}
};

// const dog = Object.create(animal);
// dog.name = "Dog";
// dog.voice = "woof";

function createAnimal(name, voice) {
	const result = Object.create(animal);
	result.name = name;
	result.voice = voice;
	return result;
}

const dog = createAnimal("Dog", "woof");
const cat = createAnimal("Cat", "meow");

dog.say();
cat.say();