var moveZeros = function (arr) {
  // TODO: Program me

  let lside = arr.filter(item => item !== 0);
  let rside = arr.filter(item => item === 0);
  return Array.prototype.concat(lside, rside);
};

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]));