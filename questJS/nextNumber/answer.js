const nextNumber = (arr, n = 0) => () => {
    let res = arr[n = n % arr.length];
    n++;
    return res;
};

let test = nextNumber([1,2,3]);

console.log(test());
console.log(test());
console.log(test());
console.log(test());

let test2 = nextNumber([1,2,3], 2);

console.log(test2());
console.log(test2());
console.log(test2());
console.log(test2());