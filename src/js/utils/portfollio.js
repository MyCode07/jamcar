import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { Draggable } from "gsap/Draggable.js";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Draggable);

function init() {
    let card = document.querySelectorAll('.portfollio__card')
    let image = document.querySelectorAll('.portfollio__card img')
    let widthContainer = 0

    image.forEach(function (item, index) {
        widthContainer = widthContainer + item['offsetWidth']
    })

    card.forEach(function (item, index) {
        item.addEventListener("click", function () {
            window.open(item.dataset.link, '_blank')
        })
    })

}