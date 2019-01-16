class Counter {
	constructor () {
		this.count = 1;
		this.inc = () => {
			this.count += Counter.incrementStep;
			console.log(this.count);
		}
	}
}

Counter.incrementStep = 2; // определение без prototype создаст static prop
Counter.incrementAll = function (arr) {
	arr.forEach( (c) => { c.inc()})
};

Counter.incrementAll([]);

const counter = new Counter();

console.log(counter.count);

console.log(counter.incrementStep);