function dashatize(num) {
    //get 'em
    if (!num || isNaN(num) || num.length == 1) return  num.toString();
    let result = Math.abs(parseInt(num)).toString().split('');




    return result;
}
console.log(dashatize(274));
console.log(dashatize(-274));
console.log(dashatize(-1));
console.log(dashatize(0));
console.log(dashatize(NaN));
console.log(dashatize(-28369));