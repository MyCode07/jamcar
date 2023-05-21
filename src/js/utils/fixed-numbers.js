const fixedNumbers = document.querySelectorAll('.phone-fixed');


let scrollTimer = -1;
function bodyScroll() {
    if (fixedNumbers.length) {
        fixedNumbers.forEach(numbers => {
            numbers.classList.remove('_active');
        })
    }

    if (scrollTimer != -1)
        clearTimeout(scrollTimer);

    scrollTimer = window.setTimeout(scrollFinished, 500);
}

function scrollFinished() {
    if (fixedNumbers.length) {
        fixedNumbers.forEach(numbers => {
            numbers.classList.add('_active');
        })
    }
}

window.addEventListener('scroll', bodyScroll);
