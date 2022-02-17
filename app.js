//preloader code
const loader = document.querySelector(".loader");
const img = document.querySelector(".img");

window.addEventListener("load", (event) => {
  loader.classList.add("hide-loader");
  img.classList.remove("img");
});
