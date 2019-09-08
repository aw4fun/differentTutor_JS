
let str = '(()(()))';

let state = 0;
let lBrack = 0;
let rBrack = 0;

const boostL = () => {state ++; rBrack ++;};
const boostR = () => {state --; lBrack --;};
const iterBrackets = () => {
    for (let i = 0; i < str.length ; i++) {
        str.charAt(i) === '(' ? boostR() : boostL();
        if (state < 0) {
            break;
        }
    }
    if (state < 0) {
        console.log(`something went wrong counter: ${state}, close bracket's is more then open brackets`);
    } else if (state > 0){
        console.log(`something went wrong counter: ${state}, open bracket's is more then close brackets`);
    } else {
        console.log(`brackets counter: ${state}`, `left is : ${lBrack}`, `right is : ${rBrack}`);
    }
};
iterBrackets();




