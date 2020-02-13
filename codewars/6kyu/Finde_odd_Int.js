function findOdd(A) {
    //happy coding!

    let info = A.reduce((accum, item) => {
        if (item in accum) {
            accum[item] +=1;
        } else {
            accum[item] = 1;
        }
        return accum;
    }, {});

    for (let key in info) {
        if (info[key] % 2 == 1) return parseInt(key);
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));