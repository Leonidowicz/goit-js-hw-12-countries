import './styles.css';
import debounce from 'lodash/debounce';
import getMarkup from './markupCard.hbs';
import ref from './ref';
import fetchCountries from './fetchCountries';
import setMurcup from './render';
import onFatchError from './error';
ref.form.addEventListener('input', debounce(inputHandler, 250));

function inputHandler(event) {
  event.preventDefault();
  const searchQuery = event.target.value.trim();
  fetchCountries(searchQuery)
    .then(response => setMurcup(response, ref.div, getMarkup(response[0])))
    .catch(error => onFatchError(error, ref.div));
}
