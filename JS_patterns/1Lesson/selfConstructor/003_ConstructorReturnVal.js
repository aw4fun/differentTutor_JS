function User(name) {
	this.name = name;
}

let a = new User("Ivan");
document.write(a.name);

let b = User("Ivan"); // без new не создается новый пустой контекст и this будет ссылаться на глобал window // b = undefined
document.write("<br />b = " + b);
document.write("<br/>window.name = " + window.name);