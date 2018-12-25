// добавление элементов по итерациям

//добавление через хранилище

let p,
	t,
	fragment;

fragment = document.createDocumentFragment(); // не отрисовываемое хранилище для элементов

p = document.createElement("p");
t = document.createTextNode("First Paragraph");
p.appendChild(t);
fragment.appendChild(p);

p = document.createElement("p");
t = document.createTextNode("Second Paragraph");
p.appendChild(t);
fragment.appendChild(p);


document.body.appendChild(fragment); //добалвение фрагмента в тело документа (элементы будут отрисованы)