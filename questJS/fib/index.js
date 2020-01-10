
// function fibbo(n) {
//     console.log(n);
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//    return fib(n-1) + fib(n-2);
// }
// have some problem =\



function fib(n) {
    const tmp = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            tmp.push(0);
            continue};
        if (i === 1) {
            tmp.push(1);
            continue};
        tmp.push( +tmp[tmp.length -1]  + +tmp[tmp.length - 2]);
    }
    return tmp;
}

console.log(fib(6));