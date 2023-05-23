const topArrow = document.querySelector('a.to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY <= 1000) {
        topArrow.classList.remove('_active');
    }
    else {
        topArrow.classList.add('_active');
    }
});

topArrow.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 0)
}) 