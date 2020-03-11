
let animal = {
    eats: true,
    walk() {
      console.log('Animal walk');
    }
};

let rabbit = {
    jumps: true,
    __proto__ : animal
};


rabbit.walk();
console.log(rabbit.eats);


/**
* not circular dependency
* __proto__ => object or null
*
* */

/**
 *
    // Object.keys возвращает только собственные ключи
    alert(Object.keys(rabbit)); // jumps

    // for..in проходит и по своим, и по унаследованным ключам
    for(let prop in rabbit) alert(prop); // jumps, затем eats
 *
* */

/**
 *
 * obj.hasOwnProperty проходит по конкретному объекту, не ходит по прототипу!
 *
 *
 */
