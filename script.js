const form = document.querySelector('form');
const email = document.querySelector('.form--field');
const error = document.querySelector('.error');
const errorImg = document.querySelector('.errorimg');
form.addEventListener(
  'input',
  function (e) {
    if (email.validity.valid) {
      error.innerHTML = '';
      error.className = 'error';
    }
  },
  false
);

form.addEventListener(
  'submit',
  function (e) {
    if (!email.validity.valid) {
      error.innerHTML = 'Please provide a valid mail';
      error.className = 'error active';
      errorImg.style.opacity = '100';
      email.style.border = '2px solid hsl(0, 93%, 68%)';
      e.preventDefault();
    }
  },
  false
);
