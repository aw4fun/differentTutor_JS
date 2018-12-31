// Работа интерпретатора

//window.myFunction = fn
//window.foo  = fn
//window.bar = undefined

function myFunction() {
	foo();
	bar(); // TypeError: bar is not a function
}

myFunction();


//функция-объявление
//имя foo и определение поднимаются вместе

function foo() {
	console.log("foo function");
}



// анонимная функция
// поднимается только имя

let bar = function () {
	console.log("bar function");
};