/*https://monsterlessons.com/project/lessons/strategy-pattern-v-javascript*/

const logger = (strategy, type, message, ...args) => { // в зависимости от стратегии может меняться количество
	return strategy(type, message, ...args)							 // аргументов, поэтому мы передаем spread = ...args
};


const strategyLog = (type, message) => { // стратегия вывода в консоль
	console[type](message);
};


const loggerDOMstrategy = (type, message, node) => { // стратегия вывода ошибок в DOM дерево

	node.innerHTML = `<div class="${type}">${message}</div>`;
};

logger(
		strategyLog,                           // Стратегия действия
		"warn",                          // Тип действия
		"log content by strategy");  // Содержимое


logger(
	loggerDOMstrategy,
	"warn",
	"log second Message to DOM",
	document.querySelector("#log")
);