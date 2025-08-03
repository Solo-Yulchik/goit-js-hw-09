'use strict';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('.form-input');
const textarea = form.querySelector('.form-textarea');
const button = form.querySelector('.form-btn');
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

let formData = {
  email: '',
  message: '',
};
const KEY_FORM = 'feedback-form-state';

function handleInput(event) {
  const type = event.target.type;
  const value = event.target.value.trim();
  if (type === 'email') {
    formData.email = value;
  } else {
    formData.message = value;
  }
  localStorage.setItem(KEY_FORM, JSON.stringify(formData));
}
function getUserData() {
  const saveText = JSON.parse(localStorage.getItem(KEY_FORM));
  if (saveText) {
    input.value = saveText.email;
    textarea.value = saveText.message;
  }
}
getUserData();

function handleSubmit(event) {
  event.preventDefault();
  if (input.value === '' || textarea.value === '') {
    alert('«Fill please all fields»');
  } else {
    event.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(KEY_FORM);
  }
}
