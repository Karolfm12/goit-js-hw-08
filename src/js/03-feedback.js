import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];
const localStorageKey = 'feedback-form-state';

emailInput.value = localStorage.getItem(localStorageKey) ?? '';
messageInput.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener(
  'input',
  throttle(e => {
    localStorage.setItem(localStorageKey, e.target.value);
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('email:' + emailInput.value);
  console.log('message:' + messageInput.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

// emailInput.addEventListener('input', e => {
//   localStorage.setItem(localStorageKey, e.target.value);
// });

// messageInput.addEventListener('input', e => {
//   localStorage.setItem(localStorageKey, e.target.value);
// });

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';

// const emailInput = document.querySelector('input[name="email"]');
// console.log(emailInput);
// localStorage.setItem('email', emailInput);
// console.log(localStorage.getItem('email'));
// emailInput.getItem('email');
