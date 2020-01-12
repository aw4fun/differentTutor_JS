function nextNumber(arr, n) {
    n = n || 0;
    return function () {
        n = arr.length - 1 < n ? 0 : n;
        return arr[n++];
    }
}

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