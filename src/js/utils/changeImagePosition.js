function replaceImages() {
    const sections = document.querySelectorAll('[data-replace-width]');
    if (sections.length) {
        sections.forEach(section => {
            const width = +section.dataset.replaceWidth;
            const newPosition = section.querySelector('[data-replace-position]');
            const oldPosition = section.querySelector('[data-replace-oldposition]');

            if (window.innerWidth <= width) {
                newPosition.after(section.querySelector('[data-replace-element]'))
            }
            else {
                oldPosition.after(section.querySelector('[data-replace-element]'))
            }
        })
    }
}

replaceImages()
window.addEventListener('resize', replaceImages)