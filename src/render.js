import { notice } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import 'animate.css/source/animate.css';

export default async function makeMurcup(data, ref, callback) {
  let markup = '';
  ref.innerHTML = '';

  if (data.length > 1 && data.length < 11) {
    data.map(country => (markup += `<li>${country.name}</li>`)).join('');
    ref.innerHTML = `<p>По вашему запросу найдены такие страны: </p></br><ul>${markup}</ul>
    <p class="tnx">Для того чтобы увидеть данные по конкретной стране</br>
  пожалуйста сделайте ваш запрос более специфическим.</p>`;
    return;
  }
  if (data.length >= 11) {
    ref.innerHTML = `<p class="tnx">Внимание!</br> По вашему запросу найдено <b>больше</b> десяти стран.</br>
  Пожалуйста сделайте ваш запрос более специфическим.</p>`;
    notice({
      text: 'Пожалуйста сделайте ваш запрос более специфическим.',
      mode: 'light',
      closer: false,
      sticker: false,
      hide: true,
      delay: 250,
    });
    return;
  } else {
    ref.insertAdjacentHTML('beforeend', callback);
  }
}
