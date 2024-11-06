// two methods we used, async/await and .then() chaining, are both ways to handle asynchronous operations, but they have different syntax and readability characteristics


// Function to get the user's current position as a Promise, using the Geolocation API
const getPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

// Async function to fetch and log the user's location (city and region) based on coordinates
const location_1 = async function () {
    // Get current position (latitude and longitude)
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Fetch location data from Geocode API using coordinates
    const myposition = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    // Parse response data as JSON
    const data = await myposition.json();

    // Log user's city and region
    console.log(`You are in ${data.city}, ${data.region}`);
}

// Call the function to execute location fetching and display
location_1();



// Function to determine and log the user's location based on geographical coordinates
const whereAmI = function () {
    getPosition()
        .then(pos => {
            // Destructure latitude and longitude from position object
            const { latitude: lat, longitude: lng } = pos.coords;

            // Fetch location data from Geocode API using coordinates
            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        })
        .then(res => {
            // Check if the response is successful, throw error if not
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            // Log user's city and region
            console.log(`You are in ${data.city}, ${data.region}`);
            return 0; // Optional return for chaining
        })
};

// Invoke the function to execute location retrieval and display
whereAmI();
