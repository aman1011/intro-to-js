function displayGrid() {

    const driver_list = ['max', 'perez', 'ham', 'alonso', 'lec', 'lando', 'sainz', 'rus', 'oscar', 'lan', 'gasly', 'ocon', 'alb', 'yuki', 'bottas', 'hulk', 'ric', 'zhou', 'mag', 'log'];
    var innerGrid = document.getElementById('newFormula');

    var newElement = document.createElement('div');
    var grid = document.createElement('div');
    grid.className = 'grid-container';
    for (var i =0; i < 20; i++) {
        var driver = document.createElement('div')
        if ((i+1) % 2 == 1) {
            driver.className = 'grid-item-left';
        } else {
            driver.className = 'grid-item-right';
        }
        var driver_img = document.createElement('img');
        driver_img.src = 'static/' + driver_list[i] + '.jpg'
        driver_img.width = 250;
        driver_img.height = 100;

        driver.appendChild(driver_img);
        grid.appendChild(driver);
    }
    newElement.appendChild(grid);
    innerGrid.appendChild(newElement);
}

function changeImageClass() {
    var image = document.getElementById('myImage');

    // Check the current class
    if (image.className === 'original-image') {
        // Change class to 'clicked-image'
        image.className = 'clicked-image';
        image.src = 'static/soccer.jpg';
    } else {
        // Change class back to 'original-image'
        image.className = 'original-image';
        image.src = 'static/f1.jpg';
    }
}