// Объект, пораждающий новые сущности


// Выполнение повторяющихся операций при создании объекта
// Позволяет создавать объекты не зная их тип на этапе компиляции (важно для языков со статической типизацией)

// Родительский конструктор
function Control() {}


	// Метод родителя
	Control.prototype.render = function (type) {
		console.log(`Control: ${this.name} <br />  ${this.control} <br />`);
	};


	// Фабричный метод
	Control.create = function (type) {
		let constructor = type;
		let newControl;


		// Проверка наличия конструктора для указанного типо объекта
		if (typeof Control[constructor] !== "function") { // проверка на наличие свойства, полученного в аргументе

			// Выбрасываем исключение, если конструктор не найден
			throw { // Если конструктор, который запрошен у нашей фабрики не найден, бросаем Error
				name: "Error",
				message: `Constructor ${constructor} not searched!`
			}
		}

		// Если Above условие прошло успешно, мы начинаем проверку
		if (typeof Control[constructor].prototype.render !== "function") { // есть ли у прототипа свойства , функция render
			Control[constructor].prototype = new Control();
		}

		// Создаем экземпляр указанного типа
		newControl = new Control[constructor]();

		return newControl;
	};



















	// Специализированные конструкторы - продукты фабрики
	Control.Button = function() {
		this.name = "Button";
		this.control = "<input type='button' value='testButton'>";
	};

	Control.TextBox = function() {
		this.name = "TextBox";
		this.control = "<input type='text'>";
	};

	Control.RadioButton = function() {
		this.name = "RadioButton";
		this.control = "<input type='radio'/> RadioButton";
	};

	// Использование фабрики
	let btn = Control.create("Button");
	let txt = Control.create("TextBox");
	let rbtn = Control.create("RadioButton");

	btn.render();
	txt.render();
	rbtn.render();