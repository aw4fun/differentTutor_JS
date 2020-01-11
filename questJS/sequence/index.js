function sequence(numArr) {
    let idx = 0;
    return function () {
        idx ++;
        return numArr[idx-1];
    }
}

const  some = sequence(['1', '2', '3', '4', '5']);

console.log(some());
console.log(some());
console.log(some());