function contextTest1() {
	console.log(this === window); // true
}


contextTest1(); // context - global object window;

let obj = {
};


obj.test = contextTest1;
obj.test();