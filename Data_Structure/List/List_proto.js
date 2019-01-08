// Итерирование, поиск упорядочевание, удаление\добавление элементов

//Одновязанный список на прототипах

function List(prev, data) {
	this.prev = prev;
	this.data = data;
}

//Usage

const n1 = new List(null, {name:"first"});
const n2 = new List(n1, {name:"second"});
const n3 = new List(n2, {name:"third"});


console.log(n1);
console.log(n2);
console.log(n3);