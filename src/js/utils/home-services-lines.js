const serviceSection = document.querySelector('.services');
if (serviceSection) {
    const sectionBody = serviceSection.querySelector('.services__body')
    const canvas = serviceSection.querySelector('canvas')
    const menuList = serviceSection.querySelectorAll('li[data-menu]')

    menuList.forEach(menuLi => {
        const listTitle = menuLi

        let delay = 0;
        menuLi.addEventListener('click', function () {
            if (window.innerWidth <= 992) {
                delay = 310
            }
            clearCanvas()
            setTimeout(() => {
                drawLines(listTitle)
            }, delay);

            window.addEventListener('resize', () => {
                drawLines(listTitle);
            })
        })

        function drawLines(listTitle) {
            let canvasSizes = {
                width: sectionBody.getBoundingClientRect().width,
                height: sectionBody.getBoundingClientRect().height
            }

            if (window.innerWidth <= 992) {
                canvasSizes = {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }

            canvas.width = canvasSizes.width;
            canvas.height = canvasSizes.height;

            const startPosition = {
                left: listTitle.getBoundingClientRect().left + listTitle.getBoundingClientRect().width / 2,
                top: listTitle.getBoundingClientRect().top + listTitle.getBoundingClientRect().height / 2
            }


            const ctx = canvas.getContext('2d');
            const menuName = menuLi.dataset.menu;
            const listItems = document.querySelectorAll(`[data-submenu="${menuName}"] li`);

            if (listItems.length) {
                listItems.forEach(li => {
                    const positions = getItemLinePosition(listTitle, li, canvas)

                    ctx.beginPath();
                    ctx.moveTo(startPosition.left, positions.start);
                    ctx.lineWidth = 1;
                    ctx.lineTo(positions.x, positions.y);
                    ctx.closePath();

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

        function clearCanvas() {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const w = canvas.width;
            canvas.width = 1;
            canvas.width = w;
        }
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