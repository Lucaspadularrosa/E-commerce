const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const obj = {
  username: false,
  email: false,
  password: false,
  password2: false,
};

// console.log(obj);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  chekInputs();
  validateForm();
  console.log(obj);
  window.location = '../index.html';
});

function chekInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
    localStorage.setItem('username', JSON.stringify(usernameValue));
    obj.username = true;
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
    localStorage.setItem('email', JSON.stringify(emailValue));
    obj.email = true;
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
    localStorage.setItem('pass', JSON.stringify(passwordValue));
    obj.password = true;
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
  } else {
    setSuccessFor(password2);
    obj.password2 = true;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

const validateForm = () => {
  const formValues = Object.values(obj);
  const valid = formValues.findIndex((value) => value === false);
  if (valid == -1) form.submit();
};
