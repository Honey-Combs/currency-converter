import '/src/components/exchangeRatesList/exchangeRatesList.css';
import { exchangeRates, currencyNames } from '/src/exchangeRatesProvider.js';
import { Component } from '../component'
import { exchangeRatesListFrame } from './exchangeRatesListFrame';
import { fillInSelectWithCurrencyNames, convertCurency } from '../../common/utils';

export class ExchangeRatesList extends Component {
  #baseCurrencySelect;
  #exchangeRatesList;

  constructor() {
    super();
    this.componentFrame = exchangeRatesListFrame;
    this.componentName = 'exchange-rates-list';
  }

  performActionsWhenComponentIsMounted() {
    const thisComponent = document.querySelector('.' + this.componentName);
    this.#baseCurrencySelect = thisComponent.querySelector('.base-currency');
    this.#exchangeRatesList = thisComponent.querySelector('tbody');

    fillInSelectWithCurrencyNames(this.#baseCurrencySelect, 'USD');
    this.#fillInExchangeRatesList();

    this.#baseCurrencySelect.addEventListener("change", () => this.#updateRatesList());
  }

  #fillInExchangeRatesList() {
    const baseCurrency = this.#baseCurrencySelect.value;
    const baseCurrencyRate = exchangeRates[baseCurrency];
   
    currencyNames.forEach(name => {
      const row = this.#exchangeRatesList.insertRow(-1);
      const sourceCurrencyCell = row.insertCell(0);
      const baseCurrencyCell = row.insertCell(1);
      const sourceCurrencyRate = exchangeRates[name];

      sourceCurrencyCell.innerHTML = '1 ' + name + ' =';
      baseCurrencyCell.innerHTML = convertCurency(1, sourceCurrencyRate, baseCurrencyRate).toFixed(5);
    })
  }

  #updateRatesList() {
    const exchangeRatesListRows = this.#exchangeRatesList.rows;
    const baseCurrency = this.#baseCurrencySelect.value;
    const baseCurrencyRate = exchangeRates[baseCurrency];

    currencyNames.forEach((name, index) => {
      const sourceCurrencyRate = exchangeRates[name];
      exchangeRatesListRows[index].lastChild.innerHTML = convertCurency(1, sourceCurrencyRate, baseCurrencyRate).toFixed(5);
    })
  }
}