interface SayHello {
    sayHello: () => void;
}

class User implements SayHello{ // implement обязует реализацию кухни имплементированного
    constructor(private name: string, private age: number) {}

    sayHello() {
        console.log(this.name + ' ' + 'Hello');
    };
}
