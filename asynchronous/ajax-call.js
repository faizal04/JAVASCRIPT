// // Create a new instance of XMLHttpRequest to interact with servers
// const request = new XMLHttpRequest();

// // Initialize a GET request to the specified API endpoint for fetching country data
// request.open('GET', 'https://restcountries.com/v3.1/name/portugal');

// // Send the request to the server
// request.send();

// // Add an event listener that triggers when the request is complete
// request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
// });


const fetch_data = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        const neighbour = data[0].borders[0];
        if (!neighbour) return;

        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    })
        .then((response) => response.json())
        .then((data) => console.log(data[0].name))
        .catch(err => console.log(`this error is printed by us ${err}`))
        .finally(() => {
            console.log("it does not matter it will always log")
        })
}

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
    fetch_data("spain");
})




