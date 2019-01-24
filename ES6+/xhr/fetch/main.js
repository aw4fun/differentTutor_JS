

class GetDataService {

	// _apiBase = "https://swapi.co/api";

	async getResource (url) {
		const res = await fetch(`${url}`); // await - мы будем ждать, пока результат промиса не станет доступным
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
		}
		return await res.json();
	};


	async getAllPeople() {
		const res = await this.getResource(`https://swapi.co/api/people/`);
		return res.results;
	}

	getPerson(id) {
		return this.getResource(`https://swapi.co/api/people/${id}/`)
	}

	async getAllPlanets () {
		const res = await this.getResource(`https://swapi.co/api/planets/`);
		return res.result;
	}

	getPlanet () {
		return this.getResource(`https://swapi.co/api/planets/${id}/`);
	}

	async getAllStarships() {
		const res = await this.getResource(`https://swapi.co/api/starships/`);
		return res.result;
	}

	getStarship(id) {
		return this.getResource(`https://swapi.co/api/starships/${id}/`)
	}


}

const swape = new GetDataService();
swape.getAllPeople()
	.then( (res) => {
	res.forEach( (p) => {
		console.log(p.name);
	})
});

// const swape = new GetDataService();
// swape.getPerson(3)
// 	.then( (res) => {
// 			console.log(res.name);
// 	});