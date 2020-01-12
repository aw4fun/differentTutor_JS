function differenceTimes(date1, date2) {
    let days = Math.abs(date1.getDate() - date2.getDate()) === 0 ? 0 : Math.abs(date1.getDate() - date2.getDate());
    return  `${((date2.getHours() - date1.getHours()) + (days * 24) ).toString().padStart(2,'0')}` +
            `:${(date2.getMinutes() - date1.getMinutes()).toString().padStart(2,'0')}` +
            `:${(date2.getSeconds() - date1.getSeconds()).toString().padStart(2, '0')}`;
}

console.log(differenceTimes(new Date(2019,9,7, 10, 10, 20), new Date(2019,9,7, 12, 13, 24)));
console.log(differenceTimes(new Date(2019,9,5, 10, 10, 20), new Date(2019,9,7, 12, 13, 24)));