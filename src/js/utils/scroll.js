const menuNav = document.querySelector('.menu__body nav');
const menuSvg = document.querySelector('.menu__svg');
const home = document.querySelector('.home');
const body = document.body;
const topBurger = document.querySelector('.menu__burger');


window.addEventListener('scroll', function () {
    if (window.scrollY <= 50) {
        menuNav.classList.remove('_hide')
        menuSvg.classList.remove('_hide')
        home.classList.remove('_scroll')
        topBurger.classList.remove('_visible')
    }
    else {
        menuNav.classList.add('_hide')
        menuSvg.classList.add('_hide')
        home.classList.add('_scroll')
        home.classList.add('_scroll')
        topBurger.classList.add('_visible')
    }
});