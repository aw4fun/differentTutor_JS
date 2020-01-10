function quadro(...rest) {
    return rest.map( item => item ** 2);
}
console.log(quadro(2,6,10,4));