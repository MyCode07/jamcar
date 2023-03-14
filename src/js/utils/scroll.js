const menuNav = document.querySelector('.menu__body nav');
const menuSvg = document.querySelector('.menu__svg');
const home = document.querySelector('.home');
const body = document.body;

window.addEventListener('scroll', function () {

    if (window.scrollY <= 50) {
        menuNav.classList.remove('_hide')
        menuSvg.classList.remove('_hide')
        home.classList.remove('_scroll')
        burgerBtn.classList.remove('_visible')
    }
    else {
        menuNav.classList.add('_hide')
        menuSvg.classList.add('_hide')
        home.classList.add('_scroll')
        home.classList.add('_scroll')
        burgerBtn.classList.add('_visible')
    }

});

const burgerBtn = document.querySelector('.menu__burger');
if (burgerBtn) {
    const menu = document.querySelector('.menu');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('_click');
        menuNav.classList.toggle('_open');
        menu.classList.toggle('_menu-scroll');
        body.classList.toggle('_noscroll');
    })
}