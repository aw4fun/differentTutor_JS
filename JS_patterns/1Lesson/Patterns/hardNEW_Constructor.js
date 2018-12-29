// Шаблон принудительного использования ключевого слова new


function User(name) {

	//    Object instanceof constructor

	if (!(this instanceof User)) { 	//Если конструктор вызван без ключевого слова new, this - window.
		return new User(name); 	//в таком случае вызывается этот же конструктор , но с ключевым словом new
	}

	this.name = name;
}