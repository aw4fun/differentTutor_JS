/*Метод split() разбивает строку на массив подстрок по определенному разделителю. В качестве разделителя используется строка, которая передается в метод*/




function threeWords(string) {
    let answer = false;
    let counter = 0;
    let a = string.split(" ");
    for (let i = 0; i < a.length ; i++) {
        console.log(Number(a[i]));
        console.log( `Counter is: ${counter}`);
        if (Number(a[i])){
            counter = 0;
            continue;
        }
        counter++ ;
        if (counter === 3) return answer = true;
    }

    return  answer;
}


console.log(threeWords("bla bla bla bla"));