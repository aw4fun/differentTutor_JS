
function ContextTest3() {
	console.log(this instanceof ContextTest3);
}


new ContextTest3(); // При вызове функции с ключевым словом new , контекстом будет новый пустой объект