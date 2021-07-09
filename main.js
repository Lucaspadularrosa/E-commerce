const search = document.querySelector("input");
const myH2 = document.querySelectorAll("h2");
const contenedor = document.querySelectorAll(".contenedor");
const btnTwo = document.querySelector(".btn-two");

// console.dir(btnTwo);
// console.dir(myH2);
// console.dir(contenedor);

const contador = (e) => {
  btnTwo.classList.toggle("red");
};

const buscador = (e) => {
  e.preventDefault();
  let value = search.value.toLowerCase().trim();
  console.log(value);
  for (let i = 0; i < myH2.length; i++) {
    if (myH2[i].textContent.toLocaleLowerCase().indexOf(value) === -1) {
      myH2[i].classList.add("visually-hidden");
      contenedor[i].classList.add("visually-hidden");
    } else {
      myH2[i].classList.remove("visually-hidden");
      contenedor[i].classList.remove("visually-hidden");
    }
  }
};

btnTwo.addEventListener("click", contador);
search.addEventListener("keyup", buscador);
