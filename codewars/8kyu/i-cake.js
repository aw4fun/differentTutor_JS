function cake(x, y){

    let totalPoints = y.split('').reduce((accum, item) => accum + item.charCodeAt(0), 0);
    return (totalPoints >= (x * 0.7)) ? 'Fire!' : 'That was close!';
}

console.log(cake(900, 'abcdef'));