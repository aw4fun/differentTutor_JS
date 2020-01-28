//Выделение интерфейса — это приём, при котором одинаковые
//методы и поля выносят в отдельный интерфейс.

class Horse implements Animal, Transport {};

function applyMixins(derivedCtor: any, baseCtors: Array<any>) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.protoype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.protoype, name));
        })
    })
}

applyMixins(Horse, [Animal, Transport]);