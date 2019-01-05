
function Sun() {

	// проверям наличие созданного ранее экземпляра

	if (typeof Sun.instance === "object") {

		// если он создан, то возвращаем его.
		return Sun.instance;
	}

	// если не создан, то определяем новый

	this.color = "yellow";
	this.isBig  = true;

	// неявно его возвращаем.
	// return this.

	Sun.instance = this;
}


let sun1 = new Sun(); // мы создаем экземпляр класса

// Sun.instance === null; открыт для перезаписи, это слабое место и его необходимо скрыть от изменения  путем инкапсуляции (замыкание фЯП)

let sun2 = new Sun(); // мы не проходим начальную проверку в конструкторе и получаем ссылку на созданный ранее экземпляр

//
console.log(sun1 === sun2); // true, обе переменных ссылаются на один и тот же экземпляр