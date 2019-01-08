//Позволяет выбрать определенный алгоритм в рантайме
//При этом меняя алгоритм, интерфейс объекта, который создан по шаблону стратегия не меняется


let validator = {
	types:{}, // Стратегии
	messages: [], // Сообщения об ошибках
	config: {}, // Конфигурация использования стратегий

	// Проверяет корректность значений в оюъекте data в соответствии с настройками указанными в свойствах
	// Возвращает true при наличии ошибок, false - если свойства объекта заполнены правильно.
	validate: function (data) {

		let i,
			msg,
			type,
			invalid,
			checker;

		this.messages = [];

		for (i in data) { // проверяем свойства объекта
			if (data.hasOwnProperty(i)) { // проверяем, что свойства принадлежат data, а не взяты из прототипа
				type = this.config[i]; // получаем тип проверки для свойства
				checker = this.types[type]; // получаем объект выполняющий проверку

				if (!type) { // если свойства в data нету, значит ему не нужна валидация и переходим в следующую итерацию
					continue;
				}
				if (!checker) { // проверка на наличие стратегии, на которую ссылается свойство data
					throw {
						name: "ValidatorError",
						message: "Не найден валидатор " + type
					}
				}

				invalid = checker.validate(data[i]); // валидируем значение свойства
				if (invalid) {
					msg = " Не правильное значение для " + i + ", " + checker.message;
					this.messages.push(msg);
				}
			}
		}
		return this.hasErrors();
	},

	hasErrors: function () {
		return this.messages.length !== 0;
	}
};

//=> Стратегии
// Объект выполняет проверку наличия значения в свойстве
validator.types.required = {
	validate: function (value) {
		return value === "";
	},
	message: "Обязательное значение"
};
validator.types.number = {
	validate: function (value) {
		return !/\d+/.test(value);
	},
	message: "Значение должно быть числом"
};
validator.types.email = {
	validate: function (value) {
		return !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
	},
	message: "Значение должно быть email адресом"
};
//=>

let data1 = {
	firstName: "Sidor",
	lastName: "Sidorov",
	age: 30,
	email: "test@test.com"
};


let data2 = {
	firstName: "Ivan",
	lastName: "",
	age: `dsa`,
	email: "example"
};

// настройки объекта для проверки
validator.config = {
	firstName: "required",
	lastName: "required",
	age: "number",
	email: "email"
};

let result = validator.validate(data1);
console.log(result); // false
// проверка и вывод ошибок
if (validator.validate(data1)) {
	console.log(validator.messages);
}

result = validator.validate(data2);
console.log(result);
// проверка и вывод ошибок
if (validator.validate(data2)) {
	console.log(validator.messages); // true
}



