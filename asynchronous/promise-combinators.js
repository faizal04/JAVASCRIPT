// Simulating a fast weather service with a quick response (100ms)
const fastWeatherService = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Weather data from Fast Service: 72°F and sunny!");
        }, 100);  // Fast response (100 ms)
    });
};

// Simulating a slow weather service with a slower response (200ms)
const slowWeatherService = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Weather data from Slow Service: 70°F with light rain.");
        }, 200);  // Slow response (200 ms)
    });
};

// Simulating a timeout promise that rejects after 20ms
const timeout = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("timout");
        }, 20); // Timeout after 20ms
    });
};

// Example using Promise.race()
async function getWeatherRace() {
    try {
        // Promise.race: Returns the result of the first promise to settle (either resolved or rejected)
        const weatherData = await Promise.race([fastWeatherService(), slowWeatherService(), timeout()]);
        console.log("First service response:", weatherData);
    } catch (err) {
        console.error("Error occurred:", err);
    }
}
getWeatherRace();  // Expected output: "timout" since timeout() settles first

// Example using Promise.allSettled()
async function getWeatherAllSettled() {
    try {
        // Promise.allSettled: Returns when all promises have settled (fulfilled or rejected)
        const weatherData = await Promise.allSettled([fastWeatherService(), slowWeatherService(), timeout()]);
        console.log("All services response:", weatherData);
    } catch (err) {
        console.error("Error occurred:", err);
    }
}
getWeatherAllSettled();  // Expected output: Array with the status of all promises

// Example using Promise.any()
async function getWeatherAny() {
    try {
        // Promise.any: Returns the first fulfilled promise, or an AggregateError if all promises are rejected
        const weatherData = await Promise.any([fastWeatherService(), slowWeatherService(), timeout()]);
        console.log("First successful service response:", weatherData);
    } catch (err) {
        console.error("Error occurred:", err);
    }
}
getWeatherAny();  // Expected output: "Weather data from Fast Service: 72°F and sunny!" 
// since it's the first fulfilled promise
