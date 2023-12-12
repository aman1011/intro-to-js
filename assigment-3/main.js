document.addEventListener('DOMContentLoaded', function() {
    const gryffindor = document.getElementById('gryffindor');
    const dataContainer = document.getElementById('dataContainer');

    gryffindor.addEventListener('click', function() {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        const apiEndpoint = 'https://hp-api.onrender.com/api/characters/house/gryffindor';

        // Fetch data from the API
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
                // Display the fetched data at the bottom of the page
                const newDataElement = document.createElement('div');
                console.log(data[0]);
                newDataElement.innerHTML = `<p>Top students from Gryffindor:</p>
                                            <pre>${JSON.stringify(data, null, 2)}</pre>`;

                // Append the new data element to the container
                dataContainer.appendChild(newDataElement);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Display an error message at the bottom of the page
                const errorElement = document.createElement('div');
                errorElement.innerHTML = '<p>Failed to fetch data from the API.</p>';
                dataContainer.appendChild(errorElement);
            });
    });
});
