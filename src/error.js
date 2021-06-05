export default function onFatchError(response, ref) {
  if (!response.ok) {
    ref.innerHTML = `<p class="error">Такой страны не существует,</br>проверьте правильность ввода.</p>`;
  }
}
