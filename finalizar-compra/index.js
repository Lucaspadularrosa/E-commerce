const form = document.querySelector('.form');
const formControl = document.querySelectorAll('.form-control');
const formCheck = document.querySelector('.form-check-input');
const btnCompras = document.querySelector('.btn-compras');
const camposObligatorios = document.querySelector('.camposObligatorios');
const terminos = document.querySelector('.terminos');

const arrLabel = [];
const objLabel = {
  checked: false,
};

formControl.forEach((label) => {
  arrLabel.push(label);
});

btnCompras.addEventListener('click', (e) => {
  e.preventDefault();
  for (let i = 0; i < arrLabel.length; i++) {
    if (arrLabel[i].value === '') {
      camposObligatorios.innerHTML = 'Campos Obligatorios *';
    } else {
      camposObligatorios.innerHTML = '';
      arrLabel[i].checked = true;
    }
  }

  if (formCheck.checked === false) {
    terminos.innerHTML = 'Aceptar términos y condiciones';
  } else {
    terminos.innerHTML = '';
    objLabel.checked = true;
  }

  for (let i = 0; i < arrLabel.length; i++) {
    if (arrLabel[i].checked === false) {
      console.log('error');
      return;
    }
  }

  if (objLabel.checked === false) {
    console.log('error2');
    return;
  }

  window.location = '../index.html';
});
