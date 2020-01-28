interface ICodeProducer {
    writeCode(): void;
}

interface IPizzaConsumer {
    eatPizza(slicesCount: number): void;
}

class RegularProgrammer implements ICodeProducer, IPizzaConsumer{
    constructor() {};
    writeCode(): void {};
    eatPizza(slicesCount: number): void {};
}

class Freelancer implements ICodeProducer{
    constructor() {};
    writeCode(): void {};
}


