let burger = document.querySelector("a.burgerMenu")
burger.addEventListener("click", e => {

    let menu = document.querySelector("ul.navBar")
    if(menu.className == "navBar"){
        menu.classList.add("visible")
    }
    else {
        menu.className.remove("visible")
    }

});