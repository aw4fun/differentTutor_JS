class Programmer {
    constructor(name) {
        this.name = name;
    }

    code() {
        console.log(`Code by ${this.name}`);
    }
}

class Frontend extends Programmer{
    angular() {
        console.log(`Angular by ${this.name}`);
    }
}

class Backend extends Programmer{
    nodejs() {
        console.log(`Nodejs by ${this.name}`);
    }
}

const frontend = new Frontend('Andrey');
frontend.code();
frontend.angular();

const backend = new Backend('Misha');
backend.code();
backend.nodejs();

class Fullstack {

}

//
// const programmer = new Programmer('Proger');
//
// programmer.code();
