const whatsAppBtns = [...document.querySelectorAll('._wa-button')]
    .concat([...document.querySelectorAll('[data-whatsapp]')]);
const phone = '79182224026';
const text = 'https://wa.clck.bar/' + phone + '?text=Здравствуйте! Заказ на ';

if (whatsAppBtns.length) {
    whatsAppBtns.forEach(btn => {
        let msg = '';
        if (btn.closest('.page-home')) {
            msg = btn.closest('.page-home').querySelector('h1').textContent
        }
        else if (btn.closest('.detejling')) {
            msg = btn.closest('.detejling').querySelector('h2').textContent
        }
        else if (btn.closest('.detejling-services') && !btn.closest('[data-null]')) {
            msg = btn.querySelector('span').textContent
        }
        else if (btn.closest('.service-grid')) {
            if (btn.closest('.service-add-title')) {
                msg = btn.closest('.service-add-title').querySelector('h2').textContent + ' - ' + btn.closest('.service-grid__grid-item').querySelector('h4').textContent
            }
            else if (btn.closest('.service-add-page-title')) {
                msg = document.querySelector('h1').textContent + ' - ' + btn.closest('.service-grid__grid-item').querySelector('h4').textContent
            }
            else {
                msg = btn.closest('.service-grid__grid-item').querySelector('h4').textContent
            }
        }
        else if (btn.closest('.service-flex')) {
            msg = btn.closest('.service-flex').querySelector('h2').textContent
        }
        else if (btn.closest('.polishing')) {
            msg = btn.closest('.polishing').querySelector('h2').textContent
        }
        else if (btn.closest('.polishing')) {
            msg = btn.closest('.polishing').querySelector('h2').textContent
        }

        msg = msg.replace(/Подробнее/gi, '')
        msg = msg.replace(/\n\s+/gi, ' ')
        btn.href = text + msg;
    })
} 