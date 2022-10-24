// agregando al carrito
let botonMenos = document.getElementById("button-addon1");
let botonMas = document.getElementById("button-addon2");
let input = document.querySelector(".form-control");
let car = document.querySelector(".top-10");
let botonAddToCar = document.getElementById("addToCar");
let contador = 0;
// modificando las imagenes
let imagenGrande = document.querySelector(".card-img-top");
let imagenChica = document.querySelector(".image");

// agregando al carrito
botonMenos.addEventListener("click", () => {
  if (input.value != 0) {
    contador--;
  }
  input.value = contador;
})
botonMas.addEventListener("click", () => {
  contador++
  input.value = contador
});
botonAddToCar.addEventListener('click', () => {
  if (car.textContent == 0) {
    car.textContent = contador;
  }
  else {
    car.textContent = parseInt(car.textContent) + contador;
  }
})

// modificando las imagenes
imagenChica.addEventListener('click', (e) => {
  document.querySelector(".card-img-top").src = e.target.src;
})