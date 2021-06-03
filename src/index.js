import './styles.css';
// import {
//   alert,
//   defaultModules
// } from 'node_modules/@pnotify/core/dist/PNotify.js';
import * as Swal from 'sweetalert2'

// import 'sweetalert2/src/sweetalert2.scss'
// const _ = require('lodash')
// import _ from '../node_modules/lodash/fp/debounce';
import debounce from 'lodash.debounce';
import markupCard from './markupCard.hbs';
import ref from './ref';
import fetchCountries from './fetchCountries';
import makeMurcup from './render'
import onFatchError from './error'
ref.form.addEventListener('input', inputHandler);



function inputHandler(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.input.value.trim();
  fetchCountries(searchQuery)
    .then(response => makeMurcup(response, ref.div, markupCard(response[0])))
    .catch(error => onFatchError(error, ref.div))
    .finally(() => {})
}
