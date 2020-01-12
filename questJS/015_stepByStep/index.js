function stepByStep(num1, num2, step) {
    let stepGoal = Math.abs(num1 - num2) / step;
    let myArr = [num1];
    for (let i = 1; i < step ; i++) {
        myArr.push(num1 + (i * stepGoal));
    }
    myArr.push(num2);
    return myArr;
}
console.log(stepByStep(20, 40, 5));