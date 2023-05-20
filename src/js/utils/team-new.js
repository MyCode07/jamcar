import Swiper from "swiper";

let swiper = null;
teamSlider()
window.addEventListener('resize', teamSlider);

function teamSlider() {
    const slider = document.querySelector('.team__slider');
    const sliderWrapper = document.querySelector('.team__slider-wrapper');
    const slides = document.querySelectorAll('.team__slider-slide');

    if (slider) {
        if (window.innerWidth <= 1610) {
            createSlider()
        }
        else {
            destroySldier()
        }
    }

    function createSlider() {

        if (!slider.classList.contains('swiper')) {
            slider.classList.add('swiper');
        }

        if (!sliderWrapper.classList.contains('swiper-wrapper')) {
            sliderWrapper.classList.add('swiper-wrapper');
        }

        slides.forEach(slide => {
            if (!slide.classList.contains('swiper-slide')) {
                slide.classList.add('swiper-slide');
            }
        })

        if (swiper == null) {
            swiper = new Swiper(slider, {
                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true
            })
        }
    }

    function destroySldier() {
        swiper = null

        slider.classList.remove('swiper');
        sliderWrapper.classList.remove('swiper-wrapper');
        slides.forEach(slide => {
            slide.classList.remove('swiper-slide');

            if (slide.classList.contains('swiper-slide-duplicate')) {
                slide.remove();
            }
        })
    }
}
