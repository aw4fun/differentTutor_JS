const genitive = (n, word) => {
    let res = word.many2;
    if (n % 100 < 5 || n % 100 > 20){
        if (n % 10 === 1) res = word.singular;
        if (n % 10 > 1 && n % 10 < 5) res = word.many1;
    }
    return `${n} ${res}`;
};

console.log(genitive(23,{singular:'орех', many1:'ореха', many2:'орехов'}));