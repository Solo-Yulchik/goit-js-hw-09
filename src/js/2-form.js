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

const getData = localStorage.getItem(KEY_FORM);
const saveData = getData ? JSON.parse(getData) : { email: '', message: '' };
formData = saveData;

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
  input.value = formData.email;
  textarea.value = formData.message;
}

getUserData();

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
