const myArr = [1,2,4,2,5,3,4,5,2,1];

console.log(myArr.reduce((accum, value) => {
    console.log(accum ^ value);
    return accum ^ value;
}, 0));