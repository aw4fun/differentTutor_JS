let animal = {
    eats: true
};

function Rabbit(name) {
    // console.log(new.target);
    this.name = name;
    return 1;
}

Rabbit.prototype = animal;
Rabbit.isArray = function isArray() {
    console.log('Rabbit!!!');
}
/**
 *  Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее:
 *  "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".
 */

/**
 F.prototype используется только при вызове new F() и присваивается в качестве свойства [[Prototype]] нового объекта.
 После этого F.prototype и новый объект ничего не связывает. Следует понимать это как «единоразовый подарок» объекту.

 После создания F.prototype может измениться, и новые объекты, созданные с помощью new F(),
 будут иметь другой объект в качестве [[Prototype]], но уже существующие объекты сохранят старый.
 */

let rabbit = new Rabbit('White Rabbit');

// console.log(rabbit.eats);
// let test = Rabbit('Test');
// console.log(test);

console.log(typeof []);
console.log([] instanceof Array );
console.log(Array.isArray([]));

Rabbit.isArray();