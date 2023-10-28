let burgerMenuButton = document.querySelector("#burgerMenuButton");
let burgerMenu = document.querySelector("#burgerMenu");

let searchMenuButton = document.querySelector("#searchMenuButton");
let searchMenu = document.querySelector("#searchMenu");

let pagesButton = document.querySelector("#pagesButton");
let pagesMenu = document.querySelector("#pagesMenu");

let hoverBtn = document.querySelector("#hoverBtn");

pagesButton.addEventListener("mouseover", function () {
    pagesMenu.classList.add("scale-y-1");
    pagesMenu.classList.remove("scale-y-0");
    if (pagesMenu.classList.contains("scale-y-1")) {
        hoverBtn.classList.add("text-activeColor");
    } else {
        hoverBtn.classList.remove("text-activeColor");
    }
});

pagesButton.addEventListener("mouseout", function () {
    pagesMenu.classList.remove("scale-y-1");
    pagesMenu.classList.add("scale-y-0");
    if (pagesMenu.classList.contains("scale-y-1")) {
        hoverBtn.classList.add("text-activeColor");
    } else {
        hoverBtn.classList.remove("text-activeColor");
    }
});

searchMenuButton.addEventListener("click", () => {
    searchMenuButton.classList.toggle("open");
    searchMenu.classList.toggle("scale-y-1");
    searchMenu.classList.toggle("scale-y-0");
});

burgerMenuButton.addEventListener("click", () => {
    burgerMenuButton.classList.toggle("open");
    burgerMenu.classList.toggle("scale-1");
    burgerMenu.classList.toggle("scale-0");
});
