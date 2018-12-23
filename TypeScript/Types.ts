// Types


//string
let str = "string"; // Тип становится string
// str = 10; Error

let str1: string = "SomeString"; // явное указание типа.


//number

let num: number = 10;
let num1 = 9;


//boolean

let isTrue: boolean = true;
let isFalse: boolean = false;

isTrue = false;
isFalse = true;

//other

let unknown: any = "1"; // мы можем юзать любой значение любого типа
unknown = true;

let stringOrNumber: string | number = "1"; // Тип или строка или число
stringOrNumber = 11;

