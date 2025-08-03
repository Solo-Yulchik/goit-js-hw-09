'use strict';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('[name="email"]');
const textarea = form.querySelector('[name="message"]');
const button = form.querySelector('.form-btn');
const KEY_FORM = 'feedback-form-state';
let formData = {
  email: '',
  message: '',
};

try {
  const getData = localStorage.getItem(KEY_FORM);
  if (getData) {
    const parsed = JSON.parse(getData);
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'email' in parsed &&
      'message' in parsed
    ) {
      formData = parsed;
    }
  }
} catch (error) {
  console.error('Reading problems with localStorage:', error);
}

function getUserData() {
  input.value = formData.email;
  textarea.value = formData.message;
}

getUserData();

form.addEventListener('input', handleInput);

function handleInput(event) {
  const name = event.target.name;
  const value = event.target.value.trim();
  if (name === 'email') {
    formData.email = value;
  } else {
    formData.message = value;
  }
  localStorage.setItem(KEY_FORM, JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (input.value.trim() === '' || textarea.value.trim() === '') {
    alert('«Fill please all fields»');
    return;
  }
  console.log(formData);

  formData = { email: '', message: '' };
  event.currentTarget.reset();
  localStorage.removeItem(KEY_FORM);
}
