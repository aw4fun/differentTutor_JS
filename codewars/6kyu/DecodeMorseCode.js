decodeMorse = function(morseCode){
    //your code here
    let temp = [];
    morseCode.split(/\s{1,2}/).map(item =>{
        if(MORSE_CODE[item]) {
            temp.push(MORSE_CODE[item])
        } else {
            temp.push(' ');
        }
        return temp.join('');
    });
};

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));