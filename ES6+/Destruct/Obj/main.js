const animal = {
	nick: {
		name: "Chack",
		age: 4,
	},
	weight: "11 kg",
};

const { nick: {name: bobikName, age: bobikAge},weight} = animal;

const { role = "Friend"} = animal;

const { animalSay: {bark = "Voof"} = {}} = animal; // по умлочанию animal-say пустой объект, в котором по умолчанию bark содержит Voof

console.log(bobikName);
console.log(bobikAge);
console.log(weight);
console.log(role);
console.log(bark);
console.dir({animal});