import gsap from 'gsap'
import { isMobile } from './isMobile.js';

const advantagesItems = document.querySelectorAll('.advantages__body ol li')

let left = 200;
if (window.innerWidth <= 768) {
    left = 180;
}

if (advantagesItems.length) {
    advantagesItems.forEach((item) => {
        const image = item.querySelector('img')

        if (!isMobile.any()) {

            item.addEventListener('mouseenter', (e) => {
                gsap.to(image, { autoAlpha: 1 })
                e.target.style.zIndex = '2';
            })

            item.addEventListener('mouseleave', (e) => {
                gsap.to(image, { autoAlpha: 0, })
                e.target.style.zIndex = '0';
            })

            item.addEventListener('mousemove', (e) => {
                gsap.set(image, { x: e.offsetX - left })
            })
        }
        else {
            let click = false;
            item.addEventListener('click', (e) => {
                if (click == false) {
                    gsap.to(image, { autoAlpha: 1 })

                    e.target.style.zIndex = '2';

                    click = true
                }
                else {
                    gsap.to(image, { autoAlpha: 0, })
                    e.target.style.zIndex = '0';
                    click = false
                }
            })
        }
    })
}


const salonItems = document.querySelectorAll('.salon-item');
if (salonItems.length) {
    salonItems.forEach((el) => {
        const image = el.querySelector('img')

        el.addEventListener('mouseenter', (e) => {
            gsap.to(image, { autoAlpha: 1 })
            e.target.style.zIndex = '2';
        })

        el.addEventListener('mouseleave', (e) => {
            gsap.to(image, {
                autoAlpha: 0,
            })
            e.target.style.zIndex = '0';
        })

        el.addEventListener('mousemove', (e) => {
            handleParallax(e, el, image)
            gsap.to(image, { autoAlpha: 1 })
        })

        el.addEventListener('mouseout', (e) => {
            reset(image)
        });
    })
}


const handleParallax = (e, elem, image) => {
    const parallaxLeftOffset = elem.getBoundingClientRect().left;
    const parallaxTopOffset = elem.getBoundingClientRect().top;

    const coordX = e.clientX - parallaxLeftOffset - 0.5 * elem.offsetWidth;
    const coordY = e.clientY - parallaxTopOffset - 0.5 * elem.offsetHeight;

    const x = - (coordX * 0.2).toFixed(2);
    const y = - (coordY * 0.2).toFixed(2);
    image.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
};

const reset = (image) => {
    image.removeAttribute('style');
}