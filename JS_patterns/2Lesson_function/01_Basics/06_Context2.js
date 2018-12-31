let obj = {
	contextTest2: function () {
		console.log(this === obj);
	}
};


obj.contextTest2();