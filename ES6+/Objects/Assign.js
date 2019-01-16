const defaults = {
	host: "localhost",
	dbName: "blog",
	user: "admin",
};

const opts = {
	user: "john",
	password: "utopia"
};

const build = Object.assign({}, defaults, opts);
console.log(build);

const set = Object.entries(build);
console.log(set);