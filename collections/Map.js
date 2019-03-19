/*Словарь \ соответствие*/

let fruits = new Map([
  [`apple`, 100],
  [`orange`, 130],
  [`banana`, 150]
]);

let lessons = new Map([
  [1, `maths`],
  [2, `geography`],
  [3, `physics`],
]);

/**/

fruits.set(`lemon`,120); //add
let lemon = fruits.get(`lemon`); // 120
let lemonIsPreset = fruits.has(`lemon`); // true
fruits.delete(`orange`); //delete

/**/

let mapLength = lessons.size; // 3

/**/

lessons.forEach((value, key, map) => {

});