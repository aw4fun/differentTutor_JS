
const fibbo = [1, 1, 2, 3, 5, 8, 13, 21];

const [a, b, c, ...other] = fibbo;

const middleArray = [a, other, c];
const middleArray2 = [b, other, a, other];

console.log(other);
console.log(middleArray);
console.log(middleArray2);
console.log(a);


const line = [[1, 2], [3, 4]];

const [[ax,bx], [cx, dx]] = line;

console.log(ax, bx, cx, dx);

const people = ["Anton", "Andrey", "Natasha"];
const [aName, bName, cName = "Lena"] = people;

console.log(aName, bName, cName);