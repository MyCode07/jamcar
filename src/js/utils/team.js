import Swiper from "swiper";

const teamSlide = document.querySelector('.team .swiper');
if (teamSlide) {
    new Swiper(teamSlide, {
        speed: 500,
        spaceBetween: 0,
        watchSlidesProgress: true,
        initialSlide: 3,
        centeredSlides: true,

        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            426: {
                slidesPerView: 2,
            },
            500: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 3,
            },
            769: {
                slidesPerView: 3.5,
            },
            992: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 7,
                simulateTouch: true,
                allowTouchMove: true
            },
            1600: {
                slidesPerView: 7,
                simulateTouch: false,
                allowTouchMove: false
            }
        },
    });
} 