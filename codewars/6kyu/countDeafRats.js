var countDeafRats = function(town) {
    // Your code here

    let vectorMap =  town.match(/~O|O~|P/gi);
    let pIndex = vectorMap.findIndex(item => item ==='P');

    return  vectorMap.reduce((accum, item,index) => {
        if ((index < pIndex) && (item == 'O~')) return accum += 1;
        if ((index > pIndex) &&( item == '~O')) return accum += 1;
        if (item == 'P') return accum;

        return accum;
    },0);
};

console.log(countDeafRats("~O~O~O~OP~O~OO~"));