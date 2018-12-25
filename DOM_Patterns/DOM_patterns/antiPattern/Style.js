// anti pattern

// 1. каждый раз выполняется Обращение к DOM
document.getElementById("test").style.padding = "10px";
document.getElementById("test").style.border = "1px solid black";
// 2. каждое изменение или добавление стиля, перерисовывает элемент
// fix

// 1.
let doc = document.getElementById("test");

// 2. добавить класс со стилями === всего одна перерисовка
doc.classList.add("newStyle");