



const getResource = async (url) => {
	const res = await fetch(url); // await - мы будем ждать, пока результат промиса не станет доступным
	const body = await res.json();
	return body;
};

const reqURL = "https://swapi.co/api/people/1/";

getResource(reqURL)
	.then( (body) => {
		console.log(body);
	});



//
// fetch(reqURL)
// 	.then( (responce) => {
// 		return responce.json(); // для получения json в ответе
// 	})
// 	.then( (resBody) => {
// 		console.log(resBody);
// 	});