const search = document.querySelector('input');
const myH2 = document.querySelectorAll('h2');
const contenedor = document.querySelectorAll('.contenedor');
const btn = document.querySelectorAll('.heart');
const offCanvas = document.querySelector('.offcanvas-body');
const span = document.querySelector('.span');
console.log(span);
console.dir(window);
console.dir(window.localStorage.username);
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

console.log(chil);

chil.map((number) =>
  number.addEventListener('click', function () {
    number.classList.toggle('red');
    if (number.className.indexOf('red') >= 0) {
      swal('Agregado Correctamente', 'Good Job', 'success');
      const img =
        number.parentNode.parentElement.childNodes[1].firstElementChild.src;
      offCanvas.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
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
    } else {
      offCanvas.innerHTML = '';
    }
  })
);

const buscador = (e) => {
  e.preventDefault();
  let value = search.value.toLowerCase().trim();
  console.log(value);
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
