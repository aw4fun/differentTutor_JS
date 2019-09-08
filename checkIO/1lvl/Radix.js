function numberRadix(str_number, radix){
    let answer;
    let condition = parseStr(str_number, radix);

    if (condition !== -1) {
        let answer = parseInt(str_number , radix);
        return answer;
    } else {
        return -1;
    }
}

function parseStr(str,radix){
    let judgment = true;
    let num = 0;
    for (let i = 0; i < str.length ; i++) {
        num = parseInt(str.charAt(i), radix);
        if (isNaN(num)){
            return -1;
        }
    }
}

numberRadix("AF", 16);
numberRadix("AB", 10);
numberRadix("ASD", 15);