// try catch in aysnc-await


// syntax how try catch works
try {
    let x = 2;
    const y = 4;
    y = 8;
} catch (err) {
    console.log("something went wrong in try section");
}


const getPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

const location_1 = async function () {
    try {
        // Get current position (latitude and longitude)
        const position = await getPosition();
        const { latitude: lat, longitude: lng } = position.coords;

        // Fetch location data from Geocode API using coordinates
        const myposition = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

        if (!myposition.ok) throw new Error("we got error in fetching data")       // so we created here by ourself so we can catch it in catch section

        // Parse response data as JSON
        const data = await myposition.json();

        // Log user's city and region
        console.log(`You are in ${data.city}, ${data.region}`);
        return `this is nothing just a return string`;             // returning some data so we can check it outside
    } catch (err) {
        alert(err.message);
        throw err;                           // throwing err back so we can catch it outside also
    }
}


// reading return like this not gonna work because the asynchronous code is still fetching data and not completed yet the output will be promise..........
// let returnMessage = location_1();
// console.log(returnMessage);

// so we can handle it like that
location_1().then(returnMessage => console.log(returnMessage)).catch(err => console.log("will work only we throw error back in the catch  section"));



