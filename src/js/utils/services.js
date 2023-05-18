const servicesSection = document.querySelector('.services');
const servicesFlexBody = document.querySelector('.services__flex-content-body');
const servicesList = document.querySelectorAll('[data-menu]');
const sebmenuContainer = document.querySelector('.services__submenus');
const body = document.body;

if (servicesList.length) {
    servicesList.forEach(service => {
        const menuName = service.dataset.menu;
        const submenu = document.querySelector(`[data-submenu="${menuName}"]`);

        service.addEventListener('click', function () {

            if (!service.hasAttribute('locked')) {
                const openSubmenu = document.querySelector('[data-menu][locked]');

                if (openSubmenu) {
                    const openSubmenuName = openSubmenu.dataset.menu;
                    document.querySelector(`[data-submenu="${openSubmenuName}"]`).classList.remove('_open')
                    openSubmenu.removeAttribute('locked');

                    servicesFlexBody.classList.remove('_blur')
                    body.classList.remove('_noscroll')
                    sebmenuContainer.classList.remove('_active')
                    servicesSection.classList.remove('_active')
                }

                submenu.classList.add('_open')
                service.setAttribute('locked', 'true')
                servicesFlexBody.classList.add('_blur')
                sebmenuContainer.classList.add('_active')
                servicesSection.classList.add('_active')


                if (window.innerWidth <= 992) {
                    body.classList.add('_noscroll')
                }
            }
            else {
                submenu.classList.remove('_open')
                service.removeAttribute('locked')
                servicesFlexBody.classList.remove('_blur')
                body.classList.remove('_noscroll')
                sebmenuContainer.classList.remove('_active')
                servicesSection.classList.remove('_active')
            }
        })
    })
}