import { isMobile } from './isMobile.js'

const furniture = document.querySelector('.team__slider');
const furnitureItems = document.querySelector('.team__slider-wrapper');
const furnitureColumn = document.querySelectorAll('.team__slider-slide');

if (furniture) {


    let speed = furniture.dataset.speed;
    let positionX = 0;
    let coordXprocent = 0;

    function wheel() {
        let furnitureItemsWidth = 0;
        furnitureColumn.forEach(item => {
            furnitureItemsWidth += item.offsetWidth;
        });

        const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
        const distX = Math.floor(coordXprocent - positionX);


        positionX = positionX + (distX * speed);
        let position = furnitureDifferent / 200 * positionX;

        console.log(position);


        let direction = -1
        if (isMobile.any()) {
            direction = 1
        }
        else {
            direction = -1
        }

        position = direction * position;
        furnitureItems.style.transform = `translate3d(${position}px,0,0)`;

        if (Math.abs(distX) > 0) {
            requestAnimationFrame(wheel);
        }
        else {
            furniture.classList.remove('_init');
        }
    }

    function scrollSlider(pageX) {
        const furnitureWidth = furniture.offsetWidth;
        const coordX = pageX - furnitureWidth / 2;
        coordXprocent = coordX / furnitureWidth * 200;

        if (!furniture.classList.contains('_init')) {
            requestAnimationFrame(wheel);
            furniture.classList.add('_init');
        }
    }

    furniture.addEventListener('mousemove', function (e) {
        scrollSlider(e.pageX)
    });

    furniture.addEventListener('touchmove', function (e) {
        let pageX = e.changedTouches[0].clientX

        if (pageX < 0) {
            pageX = 0
        }
        else if (pageX > window.innerWidth) {
            pageX = window.innerWidth

        }
        scrollSlider(pageX)
    });
}