import { Swiper, Autoplay, Mousewheel } from 'swiper'

new Swiper('.anycar-swiper', {
    modules: [
        Autoplay,
        Mousewheel,
    ],
    loop: true,
    slidesPerView: 1.5,
    speed: 600,
    spaceBetween: 0,
    direction: 'vertical',
    mousewheelControl: false,
    allowTouchMove: false,

    autoplay: {
        delay: 2000,
    },
});