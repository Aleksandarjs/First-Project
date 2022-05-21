// !hr animacija prilikom ucitavanja 

let hr = document.querySelector("hr");
let hrWidth = 0;

window.onload = () => {

let interval = setInterval(() => {
    
        hrWidth += 5;
        hr.style.width = hrWidth + "%";
    if(hrWidth >= 100) {
        clearInterval(interval)
    } 
}, 20)};

let search = document.querySelector("#main-icons .fa-magnifying-glass");
let hiddenSearchBar = document.querySelector("#seach-bar-hidden input");
let searchInInput = document.querySelector("#seach-bar-hidden .fa-magnifying-glass")

// !search bar 

search.addEventListener("click", () => {

    if(hiddenSearchBar.style.display === "") {
        hiddenSearchBar.style.display = "inline-block";
        searchInInput.style.display = "inline-block";
        
    } else {
        hiddenSearchBar.style.display = "";
        searchInInput.style.display = "";
        
    }
});

// !cart 

let cartMenu = document.querySelector(".fa-cart-shopping");
let cart = document.querySelector("#cart");

cartMenu.addEventListener("click", () =>{
    if(cart.className === "animacija") {
        cart.className = "prikaziCart";
        cart.style.transition = "1s";
    } else {
        cart.className = "animacija";
    }
});

// !responsive bars

let iconBars = document.querySelector(".fa-bars");
let mainNavbar = document.querySelector("#main-navbar");
let body = document.querySelector("body");


iconBars.addEventListener("click", () => {
    
    if(body.style.width < 480) {

    if(mainNavbar.style.display === "") {
    mainNavbar.style.display = "flex";
    mainNavbar.style.flexDirection = "column";
    mainNavbar.style.position = "absolute";
    mainNavbar.style.width = "100%";
    mainNavbar.style.marginTop = "100px";
    mainNavbar.style.backgroundColor = "#211e2e"
    mainNavbar.style.paddingBottom = "20px";
    }else {
        mainNavbar.style.display = "";
        mainNavbar.style = null;
        
    }
}
});