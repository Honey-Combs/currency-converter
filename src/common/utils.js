import { currencyNames } from '/src/exchangeRatesProvider.js';

function convertCurency(sourceCurrencyAmount, sourceCurrencyRate, targetCurrencyRate) {
  return targetCurrencyRate * sourceCurrencyAmount / sourceCurrencyRate;
}

function fillInSelectWithCurrencyNames(select, selectedValue) {
  for(let name of currencyNames){
    var option = document.createElement("option");
    option.innerHTML = name;
    if(name == selectedValue) {
      option.selected = true;
    }

    select.appendChild(option);
  }
}

export { fillInSelectWithCurrencyNames, convertCurency }