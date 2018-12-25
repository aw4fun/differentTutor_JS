//anti pattern

for (let i = 0; i < 1000; i++) {
	document.getElementById("test").innerHTML += i + ", "; //каждое обращение к DOM - процессоро затратная авантюра
}

// fix

let
	i,
	msg = "";

for (let j = 0; j < 1000; j++) {
	msg += i + ", ";
}

document.getElementById("test").innerHTML += msg;  // одно обращение после цикла