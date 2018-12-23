let weather = [
    {
        date: 1543860000000,
        temperature: {
            night: -3,
            day: 2,
        },
        cloudiness: 'Ясно',
        snow: false,
        rain: false,
    },
    {
        date: 1543942800000,
        temperature: {
            night: 0,
            day: 4,
        },
        cloudiness: 'Облачно',
        snow: false,
        rain: true,
    },
    {
        date: 1544029200000,
        temperature: {
            night: 0,
            day: 1,
        },
        cloudiness: 'Облачно',
        snow: true,
        rain: true,
    },
    {
        date:  1544115600000,
        temperature: {
            night: 0,
            day: 1,
        },
        cloudiness: 'Облачно',
        snow: true,
        rain: true,
    },
];

let d = new Date();
d.setHours(20, 0, 0, 0 );
let  n = d.getTime();
console.log(n);


for (let i = 0; i < weather.length ; i++) {
    if (n === weather[i].date) {

        document.querySelector("#out").innerHTML = weather[i].temperature.day;

        let nextDay = weather[i].date;



        for (let j = 1; j <= 3; j++) {
            nextDay += 24*60*60*1000;
            if (weather[i+j] !== undefined && weather[i+j].date === nextDay) {
                console.log("yes");

            } else {
                break;
            }
        }
        break; // немедленный выход из блока
    }



}
