import { Swiper, Scrollbar } from 'swiper';

// spidometr
const menuList = document.querySelectorAll('.menu nav a');
const menuArrow = document.querySelector('.line');

if (menuList.length) {
    let locked = false;

    const pageId = document.querySelector('main').getAttribute('id');
    const currentPageLink = document.querySelector(`a[data-id="${pageId}"]`);
    const currentDeg = currentPageLink.dataset.deg;
    const currentCircle = document.querySelector(`svg circle[data-deg="${currentDeg}"]`);


    menuArrow.style.transform = `rotate(${currentDeg + 'deg'})`;
    locked = true;
    currentPageLink.style.opacity = 1;
    currentPageLink.setAttribute('locked', true)
    currentCircle.setAttribute('r', 11)
    currentCircle.setAttribute('fill', '#ffffff')

    menuList.forEach(menItem => {
        let deg = menItem.dataset.deg;
        const circle = document.querySelector(`svg circle[data-deg="${deg}"]`);


        menItem.addEventListener('mouseenter', function (e) {

            currentPageLink.style.opacity = 0.3;
            currentPageLink.removeAttribute('locked')
            currentCircle.setAttribute('r', 7)
            currentCircle.setAttribute('fill', currentCircle.getAttribute('data-fill'))

            menItem.style.opacity = 1;
            menuArrow.style.transform = `rotate(${deg + 'deg'})`;
            locked = true;
            this.setAttribute('locked', true)
            circle.setAttribute('r', 11)
            circle.setAttribute('fill', '#ffffff')
        })

        menItem.addEventListener('mouseleave', function (e) {

            locked = false;
            this.removeAttribute('locked')
            circle.setAttribute('r', 7)
            circle.setAttribute('fill', circle.getAttribute('data-fill'))
            menItem.style.opacity = 0.3;

            setTimeout(() => {
                if (locked == false && !document.querySelector('.menu nav a[locked]')) {

                    currentPageLink.style.opacity = 1;
                    menuArrow.style.transform = `rotate(${currentDeg + 'deg'})`;
                    locked = true;
                    currentPageLink.setAttribute('locked', true)
                    currentCircle.setAttribute('r', 11)
                    currentCircle.setAttribute('fill', '#ffffff')
                }
            }, 750);
        })
    })
}

const menuBottom = document.querySelector('.menu__bottom');
const bottomBurger = document.querySelector('.menu__bottom-burger');
const bottomMenuNav = document.querySelector('.menu__bottom-body nav');

if (menuBottom) {
    bottomBurger.addEventListener('click', () => {
        bottomBurger.classList.toggle('_click');
        bottomMenuNav.classList.toggle('_open');
    })
}

const topBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.scroll-menu');

if (topBurger) {
    topBurger.addEventListener('click', () => {
        topBurger.classList.toggle('_click');
        menu.classList.toggle('_open');
        document.body.classList.toggle('_noscroll');
    })
}

// const bottomMenu = document.querySelector('.menu__bottom .swiper');
// if (bottomMenu && window.innerWidth <= 992) {
//     new Swiper(".menu__bottom .swiper", {
//         spaceBetween: 14,
        
//         modules: [
//             Scrollbar
//         ],
//         scrollbar: {
//             el: '.menu__track',
//             draggable: true
//         },
//         breakpoints: {
//             300: {
//                 slidesPerView: 2.5
//             },
//             641: {
//                 slidesPerView: 3.5
//             },
//             769: {
//                 slidesPerView: 4.5
//             }
//         }
//     });
// }