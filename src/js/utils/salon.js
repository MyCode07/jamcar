import gsap from 'gsap'
import { isMobile } from './isMobile.js';

const salonItems = document.querySelectorAll('.salon-item');
if (salonItems.length && !isMobile.any()) {
    salonItems.forEach((item) => {
        const image = item.querySelector('img')

        item.addEventListener('mouseenter', (e) => {
            gsap.to(image, { autoAlpha: 1 })
            e.target.style.zIndex = '2';
        })

        item.addEventListener('mouseleave', (e) => {
            gsap.to(image, {
                autoAlpha: 0,
            })
            e.target.style.zIndex = '0';
        })

        item.addEventListener('mousemove', (e) => {
            handleParallax(e, item, image)
            gsap.to(image, { autoAlpha: 1 })
        })

        item.addEventListener('mouseout', (e) => {
            resetParallax(image)
        });
    })
}


function handleParallax(e, elem, image) {
    const parallaxLeftOffset = elem.getBoundingClientRect().left;
    const parallaxTopOffset = elem.getBoundingClientRect().top;

    const coordX = e.clientX - parallaxLeftOffset - 0.5 * elem.offsetWidth;
    const coordY = e.clientY - parallaxTopOffset - 0.5 * elem.offsetHeight;

    const x = - (coordX * 0.2).toFixed(2);
    const y = - (coordY * 0.2).toFixed(2);
    image.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
};

function resetParallax(image) {
    image.removeAttribute('style');
}