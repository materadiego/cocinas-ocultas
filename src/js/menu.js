const menu = document.querySelector(".header");

const menuBut = document.querySelector("#menubut");

const xMenu = document.querySelector("#x-menu");

const menuClick1 = document.querySelector("#qs");
const menuClick2 = document.querySelector("#sv");
const menuClick3 = document.querySelector("#bf");
const menuClick4 = document.querySelector("#ub");
const menuClick5 = document.querySelector("#pq");
const menuClick6 = document.querySelector("#ct");

function hideShow2() {
  if (menu.classList.contains("m-is-active")) {
    menu.classList.remove("m-is-active");
  } else {
    menu.classList.add("m-is-active");
  }
}

menuClick1.addEventListener("click", hideShow2);
menuClick2.addEventListener("click", hideShow2);
menuClick3.addEventListener("click", hideShow2);
menuClick4.addEventListener("click", hideShow2);
menuClick5.addEventListener("click", hideShow2);
menuClick6.addEventListener("click", hideShow2);

menuBut.addEventListener("click", hideShow2);
menuBut.addEventListener("click", hideShow2);

xMenu.addEventListener("click", hideShow2);

const desplegable = document.querySelector("#despl-cont");

const flechaDesplegable = document.querySelector("#flecha-despl");

function hideShow3() {
  if (desplegable.classList.contains("despl-is-active")) {
    flechaDesplegable.classList.remove("flecha-is-active");
    desplegable.classList.remove("despl-is-active");
  } else {
    desplegable.classList.add("despl-is-active");
    flechaDesplegable.classList.add("flecha-is-active");
  }
}

flechaDesplegable.addEventListener("click", hideShow3);
