let collection = (function () {


	//=> Эти данные хранятся в замыкании
	let current = -1; // указатель на элемент
	let data = [1,2,3,4,5,6,7,8,9,0]; // скрытая структура данных
	let count = data.length;
	//=>

	return {

		moveNext: function () { // метод для перемещения по структуре данных
			if (current === count - 1) { // если переменная не дошла до конца размерности
				return false;
			} else {
				current++;                 // то мы выполняем инкремент
				return true;
			}
		},

		//метод для получения текущего элемента
		getCurrent: function () {
			return data[current]; // получаем информацию по индексу массива на данный момент
		},

		//метод для сброса указателя на начало коллекции
		reset: function () {
			return -1; // сброс указателя на изначальное состояние
		}
	}
})();


// проход по структуре данных
while (collection.moveNext()){ // до тех пор, пока есть элементы
	let temp = collection.getCurrent();
	console.log(temp);
}