function addUpToSlow(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total +=i;
    }
    return total;
}

function addUpToFast(n) {
    return n * (n + 1) / 2;
}


getPerformance(addUpToSlow, 'slow');
getPerformance(addUpToFast, 'fast');

function getPerformance(fn, marker) {
   let t1 = Date.now();
   let answer = fn(100000000);
   let t2 = Date.now();
   console.log(`Time ${marker} elapsed: ${(t2 - t1) / 1000} seconds. Answer is: ${answer}`);
}