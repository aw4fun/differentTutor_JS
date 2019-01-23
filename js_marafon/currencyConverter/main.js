const axios = require("axios");

let ACCESS_KEY = "fa5a58d6cf888d21a1059dc75d2e018d";


const getExchangeRate = async (fromCurrency, toCurrency) => {

	try{
		const res = await axios.get(`http://www.apilayer.net/api/live?access_key=${ACCESS_KEY}`);
		const rate = res.data.quotes;
		const baseCurrency = res.data.source;
		const usd = 1 / rate[`${baseCurrency}${fromCurrency}`];
		return usd * rate[`${baseCurrency}${toCurrency}`];
		}
		catch (err) {
			throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency} error : ${err}`);
		}

	};

const getCountries = async (currencyCode) => {
	try{
		const res = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
		return res.data.map( (country) => {
			return country.name;
		});
	}
	catch (err) {
		throw new Error(`Unable to get countries that use ${currencyCode}, error : ${err}`);
	}

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