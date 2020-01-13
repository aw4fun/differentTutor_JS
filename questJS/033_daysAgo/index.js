function daysAgo(date) {
    let tmp = Math.abs(new Date().getDate() - date.getDate());
    if (tmp >= 5 && tmp < 21) return `${tmp} дней назад`;
    if (tmp % 10 === 1) return `${tmp} день назад`;
    if (tmp % 10 > 1 && tmp <= 4) return  `${tmp} дня назад`;

}

console.log(daysAgo(new Date(new Date().getTime() + 1000*3600*24*1+1000)));
console.log(daysAgo(new Date(new Date().getTime() + 1000*3600*24*2+1000)));
console.log(daysAgo(new Date(new Date().getTime() + 1000*3600*24*5+1000)));
console.log(daysAgo(new Date(new Date().getTime() + 1000*3600*24*15+1000)));
console.log(daysAgo(new Date(new Date().getTime() + 1000*3600*24*21+1000)));