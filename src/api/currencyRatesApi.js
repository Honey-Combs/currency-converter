export function getExchangeRates() {
  return fetch('https://cdn.cur.su/api/latest.json')
    .then(response => {return response.json()})
}
