let section = document.getElementsByTagName("section");
let division = document.querySelectorAll(".division");
let byClass = document.getElementsByClassName("division");

let test1 = document.getElementsByClassName(".division");
let test2 = document.getElementsByTagName("div");
let test3 = document.getElementById("section");
let test4 = document.getElementsByName("div");
let test5 = document.querySelector("div");
let test6 = document.querySelectorAll("div");



// console.dir(section); //1
// console.dir(division);//5
// console.dir(byClass); //5
//
// division[3].remove();
//
// console.log("Remove element");
//
// console.dir(section); //1
// console.dir(division);//5
// console.dir(byClass); //4

console.log("byClassName" + test1 + "\n",
						"byTagName" + test2 + "\n",
						"byId" + test3 + "\n",
						"byName" + test4 + "\n",
						"by querySelector" + test5 + "\n",
						"by querySelectorAll" + test6 + "\n");