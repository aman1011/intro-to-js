document.addEventListener('DOMContentLoaded', function() {
    const gryffindor = document.getElementById('gryffindor');
    const slytherin = document.getElementById('slytherin');
    const hupplepuff = document.getElementById('hupplepuff');
    const ravenclaw = document.getElementById('ravenclaw');
    const dataContainer = document.getElementById('dataContainer');

    function fetchDataAndDisplay(apiEndpoint) {
        dataContainer.innerHTML = '';
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
                const newDataElement = document.createElement('div');
                const slicedArray = data.slice(0, 5);

                const upperHTML = "<div class='grid-container'>" +
                    "<div class='image-grid'>";
                let innerHTML = '';

                slicedArray.forEach(element => {

                    innerHTML += "<div>" +
                        "<img src='" + element.image + "' width='70' height='200'" + "class='grid-item'>" +
                        "<p id='info'>" + element.name + "</p>" +
                        "<p id='info'> Wand :-" + element.wand['length'] + '" ' + element.wand['wood'] + element.wand['core'] + "</p>" +
                        "</div>";
                });

                const lowerHTML = "</div>" +
                    "</div>";

                const totalHTML = upperHTML + innerHTML + lowerHTML;

                newDataElement.innerHTML = totalHTML;
                dataContainer.appendChild(newDataElement);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                const errorElement = document.createElement('div');
                errorElement.innerHTML = '<p>Failed to fetch data from the API.</p>';
                dataContainer.appendChild(errorElement);
            });
    }

    // Gryffindor
    gryffindor.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Button clicked - Gryffindor');
        const apiEndpoint = 'https://hp-api.onrender.com/api/characters/house/gryffindor';
        fetchDataAndDisplay(apiEndpoint);
    });

    // Slytherin
    slytherin.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Button clicked - slytherin');
        const apiEndpoint = 'https://hp-api.onrender.com/api/characters/house/slytherin';
        fetchDataAndDisplay(apiEndpoint);
    });

    // Hupplepuff
    hupplepuff.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Button clicked - hupplepuff');
        const apiEndpoint = 'https://hp-api.onrender.com/api/characters/house/hufflepuff';
        fetchDataAndDisplay(apiEndpoint);
    });

    // Ravenclaw
    ravenclaw.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Button clicked - Ravenclaw');
        const apiEndpoint = 'https://hp-api.onrender.com/api/characters/house/ravenclaw';
        fetchDataAndDisplay(apiEndpoint);
    });

});
