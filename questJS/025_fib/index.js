
function decorator(num) {
    const memo = {};
    const answer = [];
    function fibbo(num) {

        if (memo[num]) return memo[num];
        if (num === 0) {
            memo[num] = 0;
            return memo[num];
        };
        if (num === 1){
            memo[num] = 1;
            return memo[num];
        };

        return memo[num] = fibbo(num-1) + fibbo(num-2);
    };
    fibbo(num);
    console.log(memo);
    for (let key in memo) {
        answer.push(memo[key]);
    }
    return answer;
}
// have some problem =\
console.log(decorator(4));

// by recursion ^ ugly >.<

// by loop v

function fib(n) {
    const tmp = [];
    for (let i = 0; i <= n; i++) {
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

console.log(fib(4));