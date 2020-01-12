const oddity = arr => arr.sort((a, b) => b % 2 ? 1 : -1 );
console.log(oddity([3,9,2,7,6,5,4,0]));