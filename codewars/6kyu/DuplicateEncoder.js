function duplicateEncode(word){

    const reference = word.toLowerCase().split('');
    const referenceCount = reference.reduce((accum, item, index,arr) => {
        (accum.hasOwnProperty(item)) ? accum[item] += 1 : accum[item] = 1;
        return accum;
    }, {});

    return reference.map( item => {
        return referenceCount[item] == 1 ? '(' : ')';
    }).join('');
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));