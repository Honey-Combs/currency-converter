export const currencyConverterFrame = `<section class="currency-converter">
<div>
  <label for="source-currency-amount">Source currency amount</label>
  <input type="number" class="source-currency-amount" id="source-currency-amount">
</div>

<div>
  <label for="source-currency">Source currency</label>
  <select class="source-currency" value="USD">
  </select>
</div>

<div>
  <label for="target-currency">Target currency</label>
  <select class="target-currency">
  </select>
</div>

<div>
  <label for="target-currency-amount">Target currency amount</label>
  <input type="text" class="target-currency-amount" id="target-currency-amount" readonly>
  </input>
</section>`;