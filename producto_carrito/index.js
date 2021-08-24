const container = document.querySelector('.container-xl');
const h2 = document.querySelector('.card-text');
const h3 = document.querySelector('.article');
const newLocalStorage = localStorage.getItem('localstorage');
const precioFinal = localStorage.getItem('precio');
const str = newLocalStorage.split(',');
const descuento = document.querySelector('.descuento');

let total = 0;
let articulos = 0;

str.map((product) => {
  container.innerHTML += `
  
  <div class="card mb-3" style="max-width: 100%;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${product}"  alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <b><p>Precio: $${precioFinal}</p></b>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2 mb-3" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary btnbutton">37</button>
    <button type="button" class="btn btn-primary btnbutton">38</button>
    <button type="button" class="btn btn-primary btnbutton">39</button>
    <button type="button" class="btn btn-primary btnbutton">40</button>
    <button type="button" class="btn btn-primary btnbutton">41</button>
    <button type="button" class="btn btn-primary btnbutton">42</button>
  </div>
  </div>
  

          <p class="talle">Talle: --</p> 
          <div class="btn-group mb-3">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    1
  </button>
  <ul class="dropdown-menu" style="cursor:pointer">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  </ul>
</div>
<p class="subtotal">Subtotal: $3000</p>
          </div>
          </div>
          </div>
          </div>`;
  const btnGroup = document.querySelectorAll('.btnbutton');
  btnGroup.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const dato = btn.innerHTML;
      btn.parentElement.parentElement.parentElement.childNodes[9].innerHTML = `Talle: ${dato}`;
    });
  });
  const lis = document.querySelectorAll('li');
  lis.forEach((li) => {
    li.addEventListener('click', (e) => {
      console.dir(li);
      li.parentNode.parentNode.childNodes[1].innerHTML = li.innerHTML;
      const intLi = parseInt(li.innerHTML);
      const intPrecio = parseInt(precioFinal);
      const total2 = intLi * intPrecio;
      li.parentNode.parentNode.parentNode.childNodes[13].innerHTML = `Subtotal: $${total2}`;
      total = total - 3000 + total2;
      h2.innerHTML = `Total: $${total}`;
    });
  });

  const intPrecio = parseInt(precioFinal);
  total += intPrecio;
  h2.innerHTML = `Total: $${total}`;

  articulos += 1;
  h3.innerHTML = `Articulos: ${articulos}`;
});

descuento.addEventListener('keyup', (e) => {
  const value = e.target.value;
  const valueLowerCase = value.toLowerCase();
  if (valueLowerCase === 'nucba') {
    const newTotal = total - (total * 15) / 100;
    h2.innerHTML = `Total: <del>$${total}</del>  $${newTotal}`;
  } else {
    h2.innerHTML = `Total: $${total}`;
  }
});

const widhtWindow = document.querySelector('.container-xxl');
const cardbody = document.querySelector('.card');

if (window.screen.width < 768) {
  widhtWindow.className += ' flex-wrap';
}
