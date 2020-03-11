const myArr = [1,55,66,3324,3,43,8, 234];

function qsort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const pivot = arr[Math.floor(Math.random() * arr.length)];
        const less = arr.filter(value => value < pivot);
        const greater = arr.filter( value => value > pivot);
        return [...qsort(less), pivot, ...qsort(greater)];
    }
}

console.log(qsort(myArr));