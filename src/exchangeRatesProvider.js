import { getExchangeRates } from '/src/api/currencyRatesApi.js'

let exchangeRates;
let lastUpdate;
let currencyNames;

async function updateExchangeRates(){
  return await getExchangeRates().then(response => {
    exchangeRates = response.rates;
    lastUpdate = response.lastupdate;
    currencyNames = Object.keys(exchangeRates);
  })
}

export {exchangeRates, lastUpdate, currencyNames, updateExchangeRates};


