import {
  error
} from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

export default function onFatchError(err, ref) {
  console.dir(err);
  if (!err.ok) {
    ref.innerHTML = `<p class="error">Такой страны не существует,</br>проверьте правильность ввода.</p>`;
    error({
      text: `Ошибка: ${err.status}`,
      mode: 'light',
      closer: false,
      sticker: false,
      hide: true,
      delay: 50,
    })
  }
}
