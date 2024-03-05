 
// Postagem
const openFormButton = document.getElementById('openFormButton');
const formModal = document.getElementById('formModal');
const closeButton = document.getElementsByClassName('close')[0];

openFormButton.addEventListener('click', () => {
  formModal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  formModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === formModal) {
    formModal.style.display = 'none';
  }
});