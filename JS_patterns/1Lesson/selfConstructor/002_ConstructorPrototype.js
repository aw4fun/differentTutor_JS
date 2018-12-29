
function User(name) {
	this.name = name;
}

// хорошая практика добавлять методы к проротипу функции конструктора - ЗЫ их можно переопределять !

User.prototype.hello = function () {
	document.write(`Hello!!! my name is ${this.name}`);
};