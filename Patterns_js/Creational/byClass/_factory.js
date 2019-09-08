class SimpleHuman {
    constructor(name){
        this.name = name;
        this.cost = 50;
    }
}

class StandardHuman {
    constructor(name){
        this.name = name;
        this.cost = 100;
    }
}

class PremiumHuman {
    constructor(name){
        this.name = name;
        this.cost = 200;
    }
}

class HumanFabric {
    static list = {
        simple: SimpleHuman,
        standard: StandardHuman,
        premium: PremiumHuman
    };
    create(name, type = 'simple'){
        const Human =  HumanFabric.list[type] || HumanFabric.list.simple;
        const member = new Human(name);
        member.type = type;
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        };
        return member;
    }
}

const factory = new HumanFabric();

const members = [
    factory.create('Vasya', 'simple'),
    factory.create('Petya', 'premium'),
    factory.create('Evgen', 'standard')
];

console.log(members);