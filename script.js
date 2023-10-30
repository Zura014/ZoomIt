let burgerMenuButton = document.querySelector("#burgerMenuButton");
let burgerMenu = document.querySelector("#burgerMenu");

let searchMenuButton = document.querySelector("#searchMenuButton");
let searchMenu = document.querySelector("#searchMenu");

let pagesButton = document.querySelector("#pagesButton");
let pagesMenu = document.querySelector("#pagesMenu");

let hoverBtn = document.querySelector("#hoverBtn");

let inputPlaceholder = document.querySelector("#inputPlaceholder");
let animTxt = document.querySelector("#animTxt");
let selectTag = document.querySelector("#selectTag");


selectTag.addEventListener("click", () => {
    
});

pagesButton.addEventListener("mouseover", () => {
    pagesMenu.classList.add("scale-y-1");
    pagesMenu.classList.remove("scale-y-0");
    if (pagesMenu.classList.contains("scale-y-1")) {
        hoverBtn.classList.add("text-activeColor");
    } else {
        hoverBtn.classList.remove("text-activeColor");
    }
});

pagesButton.addEventListener("mouseout", () => {
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
    searchMenu.classList.toggle("-translate-y-52");
    if(searchMenu.classList.contains("-translate-y-52")){
        searchMenu.classList.add("-z-10");
    }else{
        setTimeout(() => {
            searchMenu.classList.remove("-z-10");            
        }, 500);
    }
});

burgerMenuButton.addEventListener("click", () => {
    burgerMenuButton.classList.toggle("open");
    burgerMenu.classList.toggle("scale-1");
    burgerMenu.classList.toggle("scale-0");
});
