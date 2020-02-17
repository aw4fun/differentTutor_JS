const someObj = {
    name: 'Andrey',
    age: 31
};

console.log(someObj);

let str = 'dasd23dsadas';
console.log(str.replace(/(.+)/, "Hello from hell!"));

class Animal {
    constructor(a,b) {
        this.a = a;
        this.b = b;
        return 1;
    }
    sayHello() {console.log('Hello');}
    sayBy(){console.log('By')};
}

console.log(new Animal(1,2));
console.log(new Animal(1,2).a);
console.log(new Animal(1,2).b);
console.log(new Animal(1,2).sayBy());
console.log(new Animal(1,2).sayHello());