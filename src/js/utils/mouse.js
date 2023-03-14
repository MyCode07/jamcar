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

window.addEventListener("resize", function (e) {
    controlMouse();
});


let menuBottomLinks = document.querySelectorAll('._link');
for (let i = 0; i < menuBottomLinks.length; i++) {
    const link = menuBottomLinks[i];

    link.addEventListener('mouseover', function () {
        mouse.classList.add('_cursorhover');
    });

    link.addEventListener('mouseleave', function () {
        mouse.classList.remove('_cursorhover');
    });

}