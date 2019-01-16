const defaults = {
	host: "localhost",
	dbName: "blog",
	user: "admin",
};

const opts = {
	user: "john",
	password: "utopia"
};

const port = 8080;



const result = {
	...defaults,
	...opts,
	port,
	connect() {

	}
};


console.log(result);

