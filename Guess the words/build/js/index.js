// Случайным образом выбрать слово
// Запрашивать вариант ответа
// Завершить игру по желанию
// Проверять, является ли введеный ответ буквой
// Вести учет угаданных буквой
// Показывать игроку, сколько букв он отгадал и сколько еще предстоит отгадать
// Завершить игру, если слово отгадано


// let word = "fish";
// let length = word.length;
// let arrayWord = new Array(length);
// arrayWord.fill("_");
// console.log(arrayWord);

let words = [
	"programm",
	"monkey",
	"perfect",
	"sunrise"
];

let word = words[ Math.floor( Math.random() * words.length)];

let answerArray = [];

for (let i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
	alert(answerArray.join(" "));

	let guess = prompt("Guess word or click cancel for exit game.");

	if (guess === null) {
		break;
	} else if(guess.length !== 1) {
		alert("Please, insert only one word.");
	} else {
		for (let i = 0; i < word.length; i++) {
			if (word[i] === guess) {
				answerArray[i] = guess;
				remainingLetters--;
			}
		}
	}
}

alert(answerArray.join(" "));
alert("Brilliant! The word was made " + word);