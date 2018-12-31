

let arrLikeObj = {
	"0": "first",
	"1": "second",
	"2": "third",
	"3": "fourth",
	"4": "fifth",
	"5": "sixth",
	length: 6
};


let result = Array.prototype.slice.call(arrLikeObj, 2, 4);

// как я понимаю можно использовать методы прототипов

console.log(result);