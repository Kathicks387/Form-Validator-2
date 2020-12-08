const name = document.getElementById('name');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if(name.value === '' || name.value == null){
   messages.push('Name is required');
}
  if(password.value === '' || password.value == null){
  messages.push('Password is required');
}
  if(password.value.length < 6 || password.value.length > 12) {
    messages.push('Password must have at least 6 and no more than 12 characters');
  }

  if(password2.value === '' || password.value !== password2.value) {
    messages.push('Passwords do not match');
  }
  if(messages.length > 0) {
  e.preventDefault();
  errorElement.innerText = messages.join(', ')
  }
});