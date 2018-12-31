

function makeSize(size) {
	return function () {
		document.body.style.fontSize = size + "px";
	};
}

let size16 = makeSize(16);
let size20 = makeSize(20);
let size24 = makeSize(24);


document.getElementById("size-16").onclick = size16;
document.getElementById("size-20").onclick = size20;
document.getElementById("size-24").onclick = size24;