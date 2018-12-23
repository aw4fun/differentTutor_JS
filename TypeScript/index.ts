const myName: string = "VNM";
const myAge: number = 30;

function getMyName(): string { // функция возвращает строку
    return myName;
}

function getMyAge(age: number, prefix: string = "Ohh"): string { // входящие параметры в функцию валидируются по типам , поэтому им тоже типы можно задавать
    return prefix + age;
}

console.log(getMyName());
console.log(getMyAge(30));

//функции, которые ничего не возвращают

function consoleLog(str: string): void {  // Type void == означает, что данная функция ничего не возвращает
    console.log(str);
}

consoleLog("TestString"); // результат работы функции - undefined

//

function sum(num1: number, num2: number): number {
    return num1 + num2;
}


console.log(sum(5,10));


// functional expression
let someFunct = () => {}; //Для типизации функции необходимо описать типы аргументов и тип возвращаемого значения
let mySum: (a: number, b: number) => number;

mySum = sum;

console.log(mySum(10,20));

