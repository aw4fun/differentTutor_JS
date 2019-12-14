const container = new Set([
  1,2,4,, '3',3,'2', null, NaN, undefined
]);


const array = [1,2,2,3,4,5,6,6,6,5,4,3,2,1,3,4,5,6,7,8,8];

function uniqValues() {
  return [...new Set(array)];
}

console.log(uniqValues());