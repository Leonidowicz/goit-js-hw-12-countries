export default function onFatchError(error, ref, callback) {
  console.log('Это Кетч');
  console.dir(error);
  if (error.message === "Cannot read property '0' of undefined") {
    ref.innerHTML = `<p>Такой страны не существует</p>`
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
}
