

let list = (prev, data) => ({
	prev, data
});


//Usage
const n1 = list(null, {name:"first"});
const n2 = list(n1, {name:"second"});
const n3 = list(n2, {name:"third"});


console.log(n1);
console.log(n2);
console.log(n3);