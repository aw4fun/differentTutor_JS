`use strict`;

const pow = Math.pow;
const sqrt = Math.sqrt;
const inc = x => ++x;
const adds = (a,b) => a + b;
const mul = (a,b) => a * b;
const divide = (a,b) => a / b;
const logN = (base, n) => Math.log(n) / Math.log(base);
const iff = (e, x1, x2) => (e ? x1 : x2);
const loop = (from, to , fn) => {
	for (let i = from; i <= to ; i++) {
	 return	fn(i);
	}
};


const expr1 = pow(5*8,2) + ((sqrt(20) + 1) / logN(2,7));
console.log(expr1);

// /*Super Position*/ выражение , состоящее из нескольких функций
const expr2 =  adds(pow(mul(5,8),2), divide( inc(sqrt(20)),logN(2,7)));
console.log(expr2);
/**/

