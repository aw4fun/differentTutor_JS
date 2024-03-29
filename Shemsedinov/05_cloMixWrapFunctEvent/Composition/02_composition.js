`use strict`;

// /*composition*/ в функции складываем несколько функций в одну
const compose = (f1, f2) => x => f2(f1(x));

const s = `andrey Belokon`;
console.log(s);
console.log(`lower(${s}) = ${lower(s)}`);
console.log(`upperCapital(${s}) = ${upperCapital(s)}`);

const capitalize = compose(lower, upperCapital);
console.log(`capitalize("${s}") = ${capitalize(s)}`);

function lower(s) {
	return typeof(s) === "string" ? s.toLowerCase() : '';
}

function upperCapital(s) {
	return s.replace( /\w+/g, (word) =>
	word.charAt(0).toUpperCase() + word.substr(1))
}