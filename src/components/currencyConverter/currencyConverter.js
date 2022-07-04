import '/src/components/currencyConverter/currencyConverter.css';
import { exchangeRates } from '/src/exchangeRatesProvider.js';
import { Component } from '../component'
import { currencyConverterFrame } from './currencyConverterFrame';
import { fillInSelectWithCurrencyNames, convertCurency } from '../../common/utils';

export class CurrencyConverter extends Component {
  #amountInputField;
  #sourceCurrencySelect;
  #targetCurrencySelect;
  #resultField;

  constructor() {
    super();
    this.componentFrame = currencyConverterFrame;
    this.componentName = 'currency-converter';
  }

  #displayСconversionResult() {
    const sourceCurrencyAmount = this.#amountInputField.value;
    const sourceCurrencyRate = exchangeRates[this.#sourceCurrencySelect.value];
    const targetCurrencyRate = exchangeRates[this.#targetCurrencySelect.value];
    const targetCurrencyAmount = convertCurency(sourceCurrencyAmount, sourceCurrencyRate, targetCurrencyRate)
    this.#resultField.value = targetCurrencyAmount.toFixed(5);
  }

  performActionsWhenComponentIsMounted() {
    const thisComponent = document.querySelector('.' + this.componentName);
    this.#amountInputField = thisComponent.querySelector('.source-currency-amount');
    this.#sourceCurrencySelect = thisComponent.querySelector('.source-currency');
    this.#targetCurrencySelect = thisComponent.querySelector('.target-currency');
    this.#resultField = thisComponent.querySelector('.target-currency-amount');

    fillInSelectWithCurrencyNames(this.#sourceCurrencySelect, 'USD');
    fillInSelectWithCurrencyNames(this.#targetCurrencySelect, 'EUR');

    this.#amountInputField.addEventListener("input", () => this.#displayСconversionResult());
    this.#sourceCurrencySelect.addEventListener("change", () => this.#displayСconversionResult());
    this.#targetCurrencySelect.addEventListener("change", () => this.#displayСconversionResult());
  }
}
