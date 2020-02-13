function isIsogram(str){

    let candidate = new Set (str.toLowerCase().split(''));
    return str.length == candidate.size;
}

console.log( isIsogram("Dermatoglyphics"));