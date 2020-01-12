const getWordStat = (str) => {
    let res = {};
    str.split(/[,. :!?]/g).map( e => {
        if (!e) return;
        if (!(e in res))
            res[e] = 0;
        res[e]++;
    });
    return res;
};

console.log(getWordStat('Ехал грека, через реку реку реку'));