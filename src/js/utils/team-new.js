let isDown = false;
let startX;
let scrollLeft;
let translate = 0;
let translateEnd = 0;

const slider = document.querySelector('.team__slider-wrapper');
if (slider) {

    const sliderSlides = [...document.querySelectorAll('.team__slider-slide')];
    const slidesWidth = sliderSlides.reduce((index, accum) => {
        return sliderSlides.length * accum.getBoundingClientRect().width
    })

    const end = () => {
        isDown = false;
        slider.classList.remove('active');
    }

    const start = (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    const move = (e) => {
        if (!isDown) return;

        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        const dist = (x - startX);
        const width = (slidesWidth - window.innerWidth) / 2;

        translate = -1 * (scrollLeft - dist) + translateEnd;

        if (Math.abs(translate) > width) {
            if (translate < 0) {
                translate = -width
            }
            else if (translate > 0) {
                translate = width
            }
        }
        slider.style.transform = `translate3d(${translate}px,0,0)`;
    }

    (() => {
        slider.addEventListener('mousedown', function (e) {
            if (window.innerWidth <= 1610) {
                start(e);
                translateEnd = translate;
            }

        });
        slider.addEventListener('touchstart', function (e) {
            if (window.innerWidth <= 1610) {
                start(e);
            }
        });

        slider.addEventListener('mousemove', function (e) {
            if (window.innerWidth <= 1610) {
                move(e);
            }
        });

        slider.addEventListener('touchmove', function (e) {
            if (window.innerWidth <= 1610) {
                move(e);
            }
        });

        slider.addEventListener('mouseleave', function (e) {
            if (window.innerWidth <= 1610) {
                end(e);
            }
        });

        slider.addEventListener('mouseup', function (e) {
            if (window.innerWidth <= 1610) {
                end(e);
            }
        });

        slider.addEventListener('touchend', function (e) {
            if (window.innerWidth <= 1610) {
                end(e);
                translateEnd = translate;
            }
        });
    })();
}
