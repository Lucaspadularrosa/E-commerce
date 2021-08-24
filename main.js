const search = document.querySelector('input');
const myH2 = document.querySelectorAll('h2');
const contenedor = document.querySelectorAll('.contenedor');
const btn = document.querySelectorAll('.heart');
const offCanvas = document.querySelector('.offcanvas-body');
const span = document.querySelector('.span');
const badge = document.querySelector('.badge');
const modalBody = document.querySelector('.modal-body');
const btnPay = document.querySelector('.exampleModal');

const user = window.localStorage.username;
if (user === undefined) {
  span.innerHTML = '';
} else {
  span.innerHTML = user;
}

const chil = [];
for (let i = 0; i < btn.length; i++) {
  chil.push(btn[i].children[0]);
}

let total = 0;
const srcImg = [];

const funcionExport = chil.map((number) =>
  number.addEventListener('click', function () {
    const price =
      number.parentNode.parentNode.childNodes[3].childNodes[2].innerText;
    const priceParse = parseInt(price);

    const numberId = number.id;
    number.classList.toggle('red');
    if (number.className.indexOf('red') >= 0) {
      swal('Añadido al Carrito', '🛒', 'success');
      const img =
        number.parentNode.parentElement.childNodes[1].firstElementChild.src;
      offCanvas.innerHTML += `<div class="card mb-3" id="${numberId}" style="max-width: 540px;">
        <div class="row g-0" >
          <div class="col-md-4">
            <img src="${img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>`;
      total += priceParse;
      badge.innerHTML = '$' + total;
      srcImg.push(img);
    } else {
      for (let i = 0; i < offCanvas.childNodes.length; i++) {
        if (numberId === offCanvas.childNodes[i].id) {
          offCanvas.childNodes[i].innerHTML = null;
          modalBody.childNodes[i].innerHTML = '';
        }
      }
      total -= priceParse;
      badge.innerHTML = '$' + total;
      const img =
        number.parentNode.parentElement.childNodes[1].firstElementChild.src;
      for (let i = 0; i < srcImg.length; i++) {
        if (srcImg[i] === img) {
          srcImg.splice(i, 1);
        }
      }
    }
  })
);

const buscador = (e) => {
  e.preventDefault();
  let value = search.value.toLowerCase().trim();
  for (let i = 0; i < myH2.length; i++) {
    if (myH2[i].textContent.toLocaleLowerCase().indexOf(value) === -1) {
      myH2[i].classList.add('visually-hidden');
      contenedor[i].classList.add('visually-hidden');
    } else {
      myH2[i].classList.remove('visually-hidden');
      contenedor[i].classList.remove('visually-hidden');
    }
  }
};

search.addEventListener('keyup', buscador);

btnPay.addEventListener('click', (e) => {
  console.log('fin');
  const arrFinal = [];
  srcImg.forEach((src) => arrFinal.push(src));
  exportArr(arrFinal);
});

const exportArr = (arrFinal, priceParse) => {
  localStorage.setItem('localstorage', arrFinal);
  chil.map((number) => {
    const price =
      number.parentNode.parentNode.childNodes[3].childNodes[2].innerText;
    console.log(price + ' hola que onda');
    localStorage.setItem('precio', price);
  });
};
