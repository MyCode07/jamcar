import gsap from 'gsap'

const items = document.querySelectorAll('.advantages__body ol li')

let left = 200;
if (window.innerWidth <= 768) {
    left = 180;
}

if (items.length) {
    items.forEach((el) => {
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
            gsap.set(image, { x: e.offsetX - left })
        })
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