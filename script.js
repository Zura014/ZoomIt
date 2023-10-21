 let burgerMenuButton = document.querySelector("#burgerMenuButton");
 let burgerMenu = document.querySelector("#burgerMenu")
 
 
 burgerMenuButton.addEventListener("click", () => {
     if (burgerMenuButton.classList.contains("open")){
         burgerMenuButton.classList.remove("open");
         burgerMenu.classList.add("hidden");
     }else{
         burgerMenuButton.classList.add("open");
         burgerMenu.classList.remove("hidden");
     }
 })

