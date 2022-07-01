import './app.css';
import { updateExchangeRates } from "./exchangeRatesProvider";
import { Router } from "./router";
import { CurrencyConverter } from "./components/currencyConverter/currencyConverter.js";
import { ExchangeRatesList } from "./components/exchangeRatesList/exchangeRatesList.js";


const routes = new Map([
  ['/converter', new CurrencyConverter()],
  ['/rates', new ExchangeRatesList()],
]);

const router = new Router(routes, '/converter', '.content');

updateExchangeRates().then(() => {
  router.run();
  window.addEventListener('hashchange', router.run.bind(router));
  window.addEventListener('load', router.run.bind(router));
})
