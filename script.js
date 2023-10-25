let burgerMenuButton = document.querySelector("#burgerMenuButton");
let burgerMenu = document.querySelector("#burgerMenu");

let searchMenuButton = document.querySelector("#searchMenuButton");
let searchMenu = document.querySelector("#searchMenu");

let pagesButton = document.querySelector("#pagesButton");
let pagesMenu = document.querySelector("#pagesMenu");

pagesButton.addEventListener("mouseover", () => {
    pagesButton.classList.toggle("open");
    pagesMenu.classList.toggle("scale-1");
    pagesMenu.classList.toggle("scale-0");
});

searchMenuButton.addEventListener("click", () =>{
    searchMenuButton.classList.toggle("open");
    searchMenu.classList.toggle("scale-1")
    searchMenu.classList.toggle("scale-0")
});

burgerMenuButton.addEventListener("click", () => {
    burgerMenuButton.classList.toggle("open");
    burgerMenu.classList.toggle("scale-1")
    burgerMenu.classList.toggle("scale-0")
});