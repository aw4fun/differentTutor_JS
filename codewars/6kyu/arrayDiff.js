function arrayDiff(a, b) {
    if (!a) return a;
    if (!b) return a;
    return a.reduce((accum, item) => {
        if (!b.includes(item)){
            accum.push(item);
        }
        return accum;
    }, []);
}

console.log(arrayDiff([], [4,5]));
console.log(arrayDiff([1,8,2], []));
console.log(arrayDiff([3,4], [3]));