const services = document.querySelector('.uslugi__flex-content');
const service = document.querySelector('.uslugi');
const body = document.body;

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.hasAttribute('data-menu')) {
        const submenu = targetEl.querySelector(`[data-submenu]`);

        if (!targetEl.hasAttribute('locked')) {
            const openSubmenu = document.querySelector('[data-menu][locked]');

            if (openSubmenu) {
                openSubmenu.querySelector('[data-submenu]').classList.remove('_open')
                openSubmenu.removeAttribute('locked');

                services.classList.remove('_blur')

                service.classList.remove('_blur')

                body.classList.remove('_noscroll')
            }

            submenu.classList.add('_open')
            targetEl.setAttribute('locked', 'true')
            services.classList.add('_blur')

            service.classList.add('_blur')

            if (window.innerWidth <= 992) {
                body.classList.add('_noscroll')
            }
        }
        else {
            submenu.classList.remove('_open')
            targetEl.removeAttribute('locked')

            services.classList.remove('_blur')

            service.classList.remove('_blur')

            body.classList.remove('_noscroll')
        }

    }
})