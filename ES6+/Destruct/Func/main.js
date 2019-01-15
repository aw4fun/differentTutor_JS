function connect({
    host = "localhost",
    port = 12345,
		user = "guest",
     } = {}) {

	console.log( "User: ", user, "port: ", port, "Host: ", host)

}

connect();

connect({});

connect({
	host: "localhost",
	port: 3000,
	user: "anton"
});

const dictionary = {
	dog: "woof",
	cat: "meow",
	chicken: "chick",
};

const {cat, ...animals} = dictionary;

console.log(cat);
console.log(animals);