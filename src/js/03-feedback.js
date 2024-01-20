const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];
const emailLocalStorageKey = 'feedback-form-email';
const messageLocalStorageKey = 'feedback-form-message';
const obj = {};

emailInput.value = localStorage.getItem(emailLocalStorageKey) ?? '';
messageInput.value = localStorage.getItem(messageLocalStorageKey) ?? '';

form.addEventListener(
  'input',
  throttle(e => {
    const localStorageKey =
      e.target.name === 'email' ? emailLocalStorageKey : messageLocalStorageKey;
    localStorage.setItem(localStorageKey, e.target.value);
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    alert('fill the textboxes');
  } else {
    obj.email = emailInput.value;
    obj.message = messageInput.value;
    console.log(obj);
    localStorage.removeItem(emailLocalStorageKey);
    localStorage.removeItem(messageLocalStorageKey);
  }
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
