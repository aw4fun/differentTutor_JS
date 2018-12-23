/*
Приспособленец (англ. Flyweight, "легковесный (элемент)") — структурный шаблон проектирования,
при котором объект, представляющий себя как уникальный экземпляр в разных местах программы,
по факту не является таковым.
*/

let instance = null;

class Car {
	constructor(doors, engine, color) {

		if (!instance) {
			this.doors = doors;
			this.engine = engine;
			this.color = color;
		} else {
			return instance;
		}
	}
}

/*поискать информацию, попробовать интерпретировать с Java*/