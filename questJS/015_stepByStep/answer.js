const stepByStep = (num1, num2, step) => {
    let tmp = [];
    for (let i = 0; i <= step ; i++) {
        tmp[i] = num1 + i * (num2 - num1) / step;
    }
    return tmp;
};

console.log(stepByStep(20, 40, 5));
