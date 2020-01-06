function oddity(arr) {
    const arrOdd = [];
    const arrEven = [];
    arr.map( item => {
        (item % 2) === 0 ? arrEven.push(item) : arrOdd.push(item);
    });
    return sortDesc(arrOdd).concat(sortDesc(arrEven));
}

function sortDesc(arr){
    return arr.sort((a, b) => b - a);
}
console.log(oddity([3,9,2,7,6,5,4,0]));