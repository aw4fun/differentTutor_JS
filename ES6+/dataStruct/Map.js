
const obj = {
  name: "Andrey",
  age: 31,
  job: 'JS-dev'
};

const entries = [
  ['name','Andrey'],
  ['age', 31],
  ['job', 'JS-dev']
];

const cart = new Map(entries);
cart.set(obj, 'thats obj key');
console.log(cart.values());

/*
*
*
*
*
* */