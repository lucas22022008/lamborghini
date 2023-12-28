const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".navMenu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    menu.classList.toggle("active");
})