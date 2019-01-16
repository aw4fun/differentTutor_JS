// setPrototypeOf  - плохая практика, ломает производительность приложение

const animal = {
	say() {
		console.log(this.name, "goes", this.voice);
	}
};

const dog = {
	name: "Dog",
	voice: "woof",
};

Object.setPrototypeOf(dog, animal);

const cat = {
	name: "Dog",
	voice: "woof",
};

Object.setPrototypeOf(cat, animal);

cat.say();
