function order(words){
    const wordsArr = words.split(' ');
    return wordsArr.sort((a,b) => {
        if (a.match('\\d') > b.match("\\d") ){return 1}
        if (b.match('\\d') > a.match("\\d") ){return -1}
        return 0;
    }).join(' ');
}


console.log(order("4of Fo1r pe6ople g3ood th5e the2"));