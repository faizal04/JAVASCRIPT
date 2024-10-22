'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
let inputCadence = document.querySelector('.form__input--cadence');
let inputElevation = document.querySelector('.form__input--elevation');
let map, mapevent;

if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const coords = [latitude, longitude]
        map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        map.on("click", function (mapE) {
            mapevent = mapE;
            form.classList.remove("hidden");
            inputDistance.focus();

        })
    }, function () {
        alert("not able to locate your location")
    });


form.addEventListener("submit", function (e) {
    e.preventDefault();
    inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = "";
    console.log(mapevent);
    const { lat, lng } = mapevent.latlng;
    L.marker([lat, lng]).addTo(map).bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',

    })
    ).setPopupContent("Workout").openPopup();

})
inputType.addEventListener("change", function () {
    // console.log(inputType.value);
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");

})
