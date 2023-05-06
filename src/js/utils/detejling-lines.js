const hiddenLink = document.querySelectorAll('.deejling-services [data-null]');
if (hiddenLink.length && window.innerWidth <= 992) {
    hiddenLink.forEach(link => {
        link.remove();
    })
}