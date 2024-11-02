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
