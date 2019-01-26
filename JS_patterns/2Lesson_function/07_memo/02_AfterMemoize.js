// Мемоизация - прием кэширования результатов функции

function calcFib(x) {

	//проверка наличия результата для параметра x
	if (!calcFib.cache[x]) { // если результат не найдем, то проводим вычисления
		if (x > 1) {
			calcFib.cache[x] = calcFib(x-1) + calcFib(x-2)
		} else {
			calcFib.cache[x] = x;
		}
	}
		return calcFib.cache[x];
}


// создание свойства в функции с пустым объектом
calcFib.cache = {};

for (let i = 0; i < 11; i++) {
	console.log(` ${i} = ${calcFib(i)}`);
}

// в начале проверяет , есть ли в кэше значение (номер искомого числа фиббоначи). Если есть, то выводим его значение
// если нет, то создаем новый номер и рассчитываем число