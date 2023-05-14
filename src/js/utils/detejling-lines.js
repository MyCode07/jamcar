const hiddenLink = document.querySelectorAll('.detejling-services [data-null]');
if (hiddenLink.length && window.innerWidth <= 992) {
    hiddenLink.forEach(link => {
        link.remove();
    })
}



const serviceSection = document.querySelectorAll('.detejling-services');
if (serviceSection.length) {
    serviceSection.forEach(section => {
        const sectionBody = section.querySelector('.detejling-services__body')
        const canvas = section.querySelector('canvas')
        const list = section.querySelector('ul')
        const listTitle = section.querySelector('.detejling-services__title')
        function drawLines() {
            let canvasSizes = {
                width: sectionBody.getBoundingClientRect().width,
                height: sectionBody.getBoundingClientRect().height
            }

            canvas.width = canvasSizes.width;
            canvas.height = canvasSizes.height;

            const startPosition = {
                left: canvas.width / 2,
                top: 0
            }

            const ctx = canvas.getContext('2d');

            const listItems = list.querySelectorAll('li')
            if (listItems.length) {
                listItems.forEach(li => {
                    const positions = getItemLinePosition(listTitle, li, canvas)

                    ctx.moveTo(startPosition.left, positions.start);
                    ctx.lineWidth = 1;
                    ctx.lineTo(positions.x, positions.y);

                    if (li.hasAttribute('data-null')) {
                        ctx.beginPath();
                        ctx.strokeStyle = '#ffffff0';
                    }
                    else {
                        ctx.strokeStyle = '#ffffff';
                    }

                    ctx.stroke();
                })
            }
        }
        drawLines()
        window.addEventListener('resize', drawLines)
    })
}

function getItemLinePosition(listTitle, li, canvas) {
    const coords = li.getBoundingClientRect();

    const start = (listTitle.getBoundingClientRect().top + listTitle.getBoundingClientRect().height / 2) - canvas.getBoundingClientRect().top;


    const pointsX = li.dataset.pointX.replace(/\s+/, '').split(',');
    const pointsY = li.dataset.pointY.replace(/\s+/, '').split(',');


    let px = pointsX[0].replace(/\s+/, '');
    let py = pointsY[0].replace(/\s+/, '');

    if (window.innerWidth <= 600) {
        px = pointsX[2].replace(/\s+/, '');
        py = pointsY[2].replace(/\s+/, '');
    }
    else if (window.innerWidth <= 992 && window.innerWidth > 600) {
        px = pointsX[1].replace(/\s+/, '');
        py = pointsY[1].replace(/\s+/, '');
    }
    else {
        px = pointsX[0].replace(/\s+/, '');
        py = pointsY[0].replace(/\s+/, '');
    }


    const x = coords[px] - canvas.getBoundingClientRect().left;
    const y = coords[py] - canvas.getBoundingClientRect().top;

    return { start, x, y }
}