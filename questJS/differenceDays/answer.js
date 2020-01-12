const differenceDays = (d1, d2) =>  Math.floor((d2-d1)/ (1000*60*60*24));


console.log(differenceDays(new Date(2019,9,5), new Date(2019,9,7)));