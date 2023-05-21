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