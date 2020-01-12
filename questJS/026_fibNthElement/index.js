function fibNthElement(n) {
    if (n === 0 ) return 0;
    if (n === 1) return 1;
    return fibNthElement(n-1) + fibNthElement(n-2);
}
// recursion
console.log(fibNthElement(4));


function fiboNthElement(n) {
    let container = [1,1];
    for (let i = 2; i <= n; i++) {
        container[i] = container[i-1] + container[i-2];
    }
    return container[n-1];
}
// iteration
console.log(fiboNthElement(4));