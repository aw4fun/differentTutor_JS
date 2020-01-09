function getWordStat(string) {
    let answer = {},
        tmp = string.replace(',', '').split(' '); // string.split([,+ \s+]);
    tmp.map(item => {
       answer.hasOwnProperty(item) ? answer[item] += 1 : answer[item] = 1;
    });
    return answer;
}

console.log(getWordStat('Ехал грека, через реку реку реку'));