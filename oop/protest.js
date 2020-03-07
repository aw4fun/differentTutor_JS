let man = new Person('Andrey', 'Belokon', 'Mihailovich');
let button = document.querySelector('button');
console.log(button);

button.addEventListener("click", (event) => {
    console.log(event);
    console.log('man is:', man);
});

function Person(a,b,c) {
    this.name = a;
    this.lastname = c;
    this.middlename = b;
    this.sayHi = function(){
        console.log(this.name + 'Hello');
    }
}