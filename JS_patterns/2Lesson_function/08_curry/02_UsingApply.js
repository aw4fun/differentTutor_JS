

let arr = [1, 4, 7, 2, 34, 734, 1, 33, 667, 3, 56, 778, 1, 80];

let maxValue = Math.max.apply(null, arr);
let MaximusValue = Math.max.call(null, arr[0], arr[1], arr[2]);

console.log(maxValue);
console.log(MaximusValue);