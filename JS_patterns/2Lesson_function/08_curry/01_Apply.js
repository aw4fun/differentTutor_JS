

 let person = {
	firstName: "Ivan",
  lastName: "Ivanov"
 };

function print(color, count) {
	let p = document.querySelector("#output");
	p.style.color = color;

	for (let i = 0; i < count; i++) {
		p.innerHTML += "Hello, my name is " + this.firstName + "<br />";
	}
}


print.apply(person, ["green", 3]);
print.call(person, "green", 3);