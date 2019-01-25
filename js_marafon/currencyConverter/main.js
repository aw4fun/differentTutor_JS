
let ACCESS_KEY = "fa5a58d6cf888d21a1059dc75d2e018d";

function getRequest(url) {
	return new Promise( (resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", url);
		xhr.send();
		xhr.onload = function () {
			if (xhr.status === 200) {
				resolve(xhr.responseText);
			} else {
				reject(xhr.status)
			}
		}
	})
}

const getExchangeRate = async (fromCurrency, toCurrency) => {
		return await getRequest(`http://www.apilayer.net/api/live?access_key=${ACCESS_KEY}`)
			.then(
				(data) => {
					data = JSON.parse(data);
					const rate = data.quotes;
					const baseCurrency = data.source;
					const usd = 1 / rate[`${baseCurrency}${fromCurrency}`];
					return usd * rate[`${baseCurrency}${toCurrency}`];
			}
		)
			.catch ((err) => {
			console.error(`Unable to get currency ${fromCurrency} and ${toCurrency} error : ${err}`);
		})
	};

const getCountries = async (currencyCode) => {
		return await getRequest(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
			.then(
				(data) => {
					data = JSON.parse(data);
					return data.map( (country) => {
						return country.name;
				}
			)
		})

			.catch ((err) => {
		console.error(`Unable to get countries that use ${currencyCode}, error : ${err}`);
	})
};

const convertCurrency = async (fromCurrency, toCurrency, amount) => {

		const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
		const countries = await getCountries(toCurrency);
		const convertedAmount = (amount * exchangeRate).toFixed(2);
		return `${amount}${fromCurrency} is worth ${convertedAmount}${toCurrency}. You can spend
		 these in the following countries: ${countries}`
};

convertCurrency("EUR", "HRK", 20)
.then( (message) => {
	console.log(message);
})
.catch( (err) => {
	console.log(err.message)
});