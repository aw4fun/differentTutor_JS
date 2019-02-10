"use strict";

function cloneInterface(anInterface) {
	const clone = {};
	let key;
	let	fn;

	for (key in anInterface) {
		fn = anInterface[key];
		clone[key] = wrapFunction(fn);
	}
	return clone;
}

function wrapFunction(fn) {
	console.log("Wrap function: " + fn.name);
	return (...args) => {
		console.log("Called wrapper for: " + fn.name);
		console.dir({ args });
		const result = fn(...args);
		console.log("Ended wrapper for: " + fn.name);
		console.log({result});
		return result;
	};
}

const interfaceName = {
	methodName(par1, par2) {
		console.dir({method: { par1, par2 }});
		return [par1, par2];
	}
};

const cloned = cloneInterface(interfaceName);
cloned.methodName( "Uno", "Due" );