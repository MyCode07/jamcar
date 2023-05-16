import { isMobile } from './isMobile.js';

const mouse = document.querySelector('.cursor');
const mouse2 = document.querySelector('.cursor2');
const mouseElem = document.querySelector('.cursor-elem');

document.addEventListener("mousemove", function (e) {
    if (!isMobile.any()) {
        mouse.style.left = mouse2.style.left = e.clientX + "px"
        mouse.style.top = mouse2.style.top = e.clientY + "px";
    }
});

function controlMouse() {
    if (isMobile.any()) {
        mouseElem.style.display = 'none';
    }
    else {
        mouseElem.style.display = 'block';
    }
}

controlMouse();
window.addEventListener("resize", controlMouse);


let menuBottomLinks = document.querySelectorAll('._link');
if (menuBottomLinks.length) {
    menuBottomLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            mouse.classList.add('_cursorhover');
        });

        link.addEventListener('mouseleave', function () {
            mouse.classList.remove('_cursorhover');
        });
    })
}