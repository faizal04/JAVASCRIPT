//old school way

// Create a new instance of XMLHttpRequest to interact with servers
const request = new XMLHttpRequest();

// Initialize a GET request to the specified API endpoint for fetching country data
request.open('GET', 'https://restcountries.com/v3.1/name/portugal');

// Send the request to the server
request.send();

// Add an event listener that triggers when the request is complete
request.addEventListener('load', function () {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
});

//modern way

// Function to fetch data about a country and its neighbor
const fetch_data = function (country) {
    // Fetch country data from the REST Countries API using the country name
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            // Log the response object to the console for debugging purposes
            console.log(response);
            // Convert the response to JSON format and return the resulting promise
            return response.json();
        })
        .then((data) => {
            // Log the JSON data received from the API
            console.log(data);
            // Get the first neighbor's country code from the data
            const neighbour = data[0].borders[0];
            // If there are no neighbors, exit the function
            if (!neighbour) return;

            // Fetch data about the neighboring country using its country code
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        // Convert the neighbor's response to JSON format
        .then((response) => response.json())
        .then((data) => {
            // Log the name of the neighboring country
            console.log(data[0].name);
        })
        // Handle any errors that occur during the fetch operations
        .catch(err => {
            // Log a custom error message with the error details
            console.log(`This error is printed by us: ${err}`);
        })
        // This block will execute after all promise operations, regardless of success or failure
        .finally(() => {
            // Log a message indicating this block runs no matter what
            console.log("It does not matter; it will always log.");
        });
}


fetch_data("portugal");





