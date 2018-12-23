// arrays

let numArray1: number[] = [1, 2, 3]; // type массив из чисел
let numArray2: Array<number> = [1, 2, 3]; // type массив из чисел

let strArray1: string[] = ["1", "2", "3"]; // type массив из строк
let strArray2: Array<string> = ["1", "2", "3"]; // type массив из строк

let boolArray1: boolean[] = [true, false]; // type массив из булеан
let boolArray2: Array<boolean> = [true, false]; // type массив из булеан

// tuples
let array1: [number, number, string] = [1, 2, "3"]; // type массив из посследовательности
let array2: [boolean, number, string] = [true, 2, "3"]; // type массив из последовательности

//

let array5: Array<string|number> = [2, "3", 4];
array5[2] = "1";
console.log(array5);
