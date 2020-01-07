function gradient(color1, color2, step){

    color1 = color1.replace('#', '');
    color2 = color2.replace('#', '');

    const startColor = colorDivider(color1);
    const finishColor = colorDivider(color2);

    return stepByStep(startColor, finishColor, step);
}

function colorDivider(color) {
    return {
        r: parseInt(color.toString().slice(0,2), 16),
        g: parseInt(color.toString().slice(2,4),16),
        b: parseInt(color.toString().slice(4,6),16),
    }
}

function stepByStep(num1, num2, step){
    let tmp = [];
    for (let i = 0; i <= step ; i++) {
        tmp[i] = `rgb(${num1.r + Math.round(i * ((num2.r - num1.r) / step))}, ${num1.g + Math.round(i * ((num2.g - num1.g) / step))}, ${num1.b + Math.round(i * ((num2.b - num1.b) / step))})`
    }
    return tmp;
}


console.log(gradient('#336699','#89ef12', 5));