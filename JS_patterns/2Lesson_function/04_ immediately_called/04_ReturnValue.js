let obj = {

	// immediate func can be use for assign variables to obj properties
	//



	name: (function () {
		let fName = "Ivan",
				sName = "Ivanov";

		return fName + " " + sName;
	})(),

	sayHello: function () {
		console.log(`Hello my name is ${this.name}`);
	}

};


obj.sayHello();