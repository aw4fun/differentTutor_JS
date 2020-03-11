function Animal(a,b) {
    this.a = a;
    this.b = b;
};
Animal.prototype.toString = function () {
    return this.a;
};
const dog = new Animal('Name', 'Age');

console.log(dog.toString());

