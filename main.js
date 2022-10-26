// modificando las imagenes
let imagenGrande = document.querySelector(".card-img-top");
let imagenChica = document.querySelector(".image");
let imagencita = document.querySelectorAll(".col-3");
// agregando a la cesta
let botonMenos = document.getElementById("button-addon1");
let botonMas = document.getElementById("button-addon2");
let input = document.querySelector(".form-control");
let cart_badge = document.querySelector(".top-10");
let botonAddToCar = document.getElementById("addToCar");
let contador = 0;
// insertar al carrito
let cart = document.getElementById("cart"); //carrito nav
let carrito = document.querySelector(".carrito"); //carrito content

let imagen = document.querySelector(".card-img-top");
let producto = document.querySelector("#producto");
let precio = document.querySelector("span.precio");
let template = document.getElementById("template-li");
let fragment = document.createDocumentFragment();
let cart_body = document.getElementById("cart_body");
let cart_vacio = document.querySelector(".cart_vacio");
let cart_compra = document.getElementById("cart_compra");
let cart_img = document.querySelector(".cart_img");
let cart_producto = document.querySelector(".cart_producto");
let cart_precio = document.querySelector(".cart_precio");
let cart_cantidad = document.querySelector(".cart_cantidad");
let cart_subtotal = document.querySelector(".cart_subtotal");
let cart_delete = document.querySelector(".cart_delete");
let cart_checkout = document.querySelector(".cart_checkout");

// modificando las imagenes
imagenChica.addEventListener("click", (e) => {
  imagenGrande.src = e.target.src;
  for (i = 0; i < imagencita.length; i++) {
    imagencita[i].style.opacity = "1";
  }
  e.target.style.opacity = "50%";
});
// insertar al carrito
botonAddToCar.addEventListener("click", () => {
  cart_img.src = imagen.src;
  cart_producto.textContent = producto.textContent;
  cart_precio.textContent = precio.textContent;
  if (cart_cantidad.textContent == 0) {
    cart_cantidad.textContent = input.value;
  } else {
    cart_cantidad.textContent =
      parseInt(cart_cantidad.textContent) + parseInt(input.value);
  }
  cart_subtotal.textContent =
    cart_precio.textContent * cart_cantidad.textContent;
});

// agregando a la cesta
botonMenos.addEventListener("click", () => {
  if (input.value != 0) {
    contador--;
  }
  input.value = contador;
});
botonMas.addEventListener("click", () => {
  contador++;
  input.value = contador;
});
botonAddToCar.addEventListener("click", () => {
  if (input.value > 0) {
    cart_badge.textContent = cart_cantidad.textContent;
    cart_vacio.style.display = "none";
    cart_compra.style.display = "flex";
  }
});
// delete de la cesta
cart_delete.addEventListener("click", () => {
    cart_cantidad.textContent = 0;
    cart_vacio.style.display = "block";
    cart_compra.style.display = "none";
    cart_badge.textContent = cart_cantidad.textContent;
    cart_checkout.style.display = "none";  
});

// Mostrar carrito
cart.addEventListener("click", () => {
  if (carrito.style.display == "block") {
    carrito.style.display = "none";
  } else {
    carrito.style.display = "block";
  }
  if (cart_cantidad.textContent > 0) {
    cart_compra.style.display = "flex";
    cart_checkout.style.display = "block";
  } else {
    cart_compra.style.display = "none";
    cart_checkout.style.display = "none";  
    cart_vacio.style.display = "block";
  }
});