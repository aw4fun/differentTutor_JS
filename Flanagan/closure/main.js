

const countBooster = () => {
  let a = 0;

  return function () {
    a++;
    wrapper.lastElementChild.innerHTML = a;
    console.dir(wrapper);
  }
};

let wrapper = document.getElementById("wrapper");
let btn = document.getElementById("btn");
let div = document.createElement("div");
btn.addEventListener("click", countBooster());


