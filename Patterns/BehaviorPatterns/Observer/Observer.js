/*https://monsterlessons.com/project/lessons/observer-pattern-v-javascript*/

class someObserver {
	constructor() {
		this.observers = []; // массив подписчиков
	}

	subscribe(fn){ // add subscriber
		this.observers.push(fn);
	}

	unsubscribe(fn) { // remove subscribe
		this.observers = this.observers.filter(subscriber => // берем текущие подписки, фильтруем их по входящей функции,
			subscriber !== fn // тем самым удаляем функцию, которую мы передали на вход.
		)
	}

	broadcast(data) { // принимаем данные
		this.observers.forEach(subscriber => subscriber(data)) // уведомляем всех наших подписчиков
	}
}

const blogObserver = new someObserver();

const textField = document.querySelector(".textField");
const countField = document.querySelector(".countField");

const getWordsCount = text => text ? text.trim().split(/\s+/).length : 0;
//если передается text , мы обрезаем пробелы с концов [trim()]
//затем разбиваем строку на массив с разделителем пробел[/\s+/]
//затем получаем длину массива = количеству слов в строке


blogObserver.subscribe(text =>
	countField.innerHTML = getWordsCount(text)
);

textField.addEventListener("keyup", () => {
	blogObserver.broadcast(textField.value)
});