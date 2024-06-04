const initApp = function(){
    const hamBurger = document.getElementById("mobile-open-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = function(){
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle("flex");
    }

    hamBurger.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

initApp()