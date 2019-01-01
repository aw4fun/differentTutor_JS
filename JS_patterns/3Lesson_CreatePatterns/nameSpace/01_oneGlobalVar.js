// Одна глобальная переменная (в данном случае в виде объекта);


let globalVar = {}; // не безопасный код так как такой объект может уже существовать в глобальном пространстве имен



if (typeof globalVar === "undefined") { // безопасный код
	let globalVar = {};
}

let globalVar = globalVar || {}; // еще 1 вариант


globalVar.name = "Andrey";
globalVar.phone = "123 0123456";
globalVar.cash = 999;
globalVar.sayHo = function () {
	console.log(`Hi bro, my name is ${globalVar.name}`)
};
globalVar.getCash = (x) => {
	if (globalVar.cash > x) {
		return globalVar.cash - x
	} else {
		return console.log("Sry, haven't cash")}
};

globalVar.setCash = (x) => {
	return globalVar.cash + x;
};

