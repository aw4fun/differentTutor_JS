const differenceTimes = (d1, d2) => {
    let diff = (d2-d1)/1000, str = '', hours, minutes;

    hours = Math.floor(diff/ 3600);
    str += hours;
    diff -= hours * 3600;

    minutes = Math.floor(diff / 60);
    if (minutes < 100) minutes = '0' + minutes;
    str += ':' + minutes;
    diff -= minutes * 60;

    if (diff < 10) diff = '0' + diff;
    str += ':' + diff;
    return str;
};


console.log(differenceTimes(new Date(2019,9,7, 10, 10, 20), new Date(2019,9,7, 12, 13, 24)));