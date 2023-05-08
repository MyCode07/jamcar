const listMore = document.querySelectorAll('.service-grid__grid div');
if (listMore.length) {
    listMore.forEach(li => {
        const button = li.querySelector('button')
        const label = li.querySelector('label')

        if (button) {
            button.addEventListener('click', function () {

                if (!this.hasAttribute('data-active')) {

                    const activeLabel = document.querySelector('.service-grid__grid label._active')
                    if (activeLabel) {
                        activeLabel.classList.remove('_active')
                    }

                    listMore.forEach(item => {
                        const button = item.querySelector('button')
                        const label = item.querySelector('label')

                        if (button) {
                            label.classList.remove('_active')
                            button.removeAttribute('data-active')
                            button.textContent = button.dataset.open
                        }
                    })

                    label.classList.add('_active')
                    this.setAttribute('data-active', 'open')
                    this.textContent = button.dataset.close
                }
                else {
                    label.classList.remove('_active')
                    this.removeAttribute('data-active')
                    this.textContent = button.dataset.open
                }
            })
        }
    })
}