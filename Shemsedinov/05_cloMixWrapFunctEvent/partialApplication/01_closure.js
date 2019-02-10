`use strict`;

const log = function (base, n) {
	return Math.log(n) / Math.log(base)
};


function createLog(base) {
	return function (n) {
		return log(base, n);
	};
}

// const createLog = (base) => (n) => log(base, n);

const lg = createLog(10);
const ln = createLog(Math.E);