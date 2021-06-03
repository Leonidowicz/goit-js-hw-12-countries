export default async function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      if (!response.ok) {
        return console.log(' --- ERROR 404 --- ')
      } else {
        return response.json();
      }
    })
    .then(data => {
      return data;
    })
}
