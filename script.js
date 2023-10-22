let burgerMenuButton = document.querySelector("#burgerMenuButton");
let burgerMenu = document.querySelector("#burgerMenu");

let pagesButton = document.querySelector("#pagesButton");
let pagesMenu = document.querySelector("#pagesMenu");

pagesButton.addEventListener("mouseover", () => {
    if (pagesButton.classList.contains("open")) {
        pagesButton.classList.remove("open");
        pagesMenu.classList.add("hidden");
    } else {
        pagesButton.classList.add("open");
        pagesMenu.classList.remove("hidden");
    }
});

burgerMenuButton.addEventListener("click", () => {
    if (burgerMenuButton.classList.contains("open")) {
        burgerMenuButton.classList.remove("open");
        burgerMenu.classList.add("hidden");
    } else {
        burgerMenuButton.classList.add("open");
        burgerMenu.classList.remove("hidden");
    }
});