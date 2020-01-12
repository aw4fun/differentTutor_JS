function differenceDays(date1, date2) {
    return date2.getDate() - date1.getDate();
}

console.log(differenceDays(new Date(2019,9,5), new Date(2019,9,7)));