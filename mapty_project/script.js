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
class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;

    }
}

class Cycling extends Workout {
    type = "cycling";
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.speedcalc();

    }

    speedcalc() {
        this.speed = (this.distance / 60);
    }
}
class running extends Workout {
    type = "running";
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.pacecalc();
    }
    pacecalc() {
        this.pace = this.duration / this.distance;
        return this.pace;
    }

}

// const run1 = new running([32, 54], 50, 30, 32);
// const cycle1 = new Cycling([32, 54], 50, 30, 32)
// console.log(run1, cycle1);

class app {
    #map
    #mapevent
    #workout_data = []
    constructor() {
        this._getposition();
        form.addEventListener("submit", this._newWorkout.bind(this));
        inputType.addEventListener("change", this._toggleElevationField)
    }

    _getposition() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this)
            ), function () {
                alert("not able to locate your location")
            };
        console.log("getposition check");

    }
    _loadMap(position) {
        console.log("getposition check")

        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const coords = [latitude, longitude]
        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        this.#map.on("click", this._showForm.bind(this))
    }
    _showForm(mapE) {
        this.#mapevent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();

    }
    _toggleElevationField() {
        inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
        inputCadence.closest(".form__row").classList.toggle("form__row--hidden");


    }
    _newWorkout(e) {
        const validInput = (...input) => input.every(imp => Number.isFinite(imp));
        const positive_valid_input = (...input) => input.every(imp => imp > 0);
        const { lat, lng } = this.#mapevent.latlng;
        let workout;
        e.preventDefault();

        // GET DATA FROM THE FORM
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;


        // CHECK DATA IS VALID OR NOT

        //IF WORKOUT CYCLING CREATE CYCLING OBJECT 
        if (type === "cycling") {
            const elevation = +inputElevation.value;
            if (!validInput(distance, duration, elevation) || !positive_valid_input(distance, duration)) {
                return alert("Inputs have to be +ve number");
            }
            workout = new Cycling([lat, lng], distance, duration)
        }

        // IF WORKOUT RUNNING CREATE RUNNING OBJECT 
        if (type == "running") {
            const cadence = +inputCadence.value;
            if (!validInput(distance, duration, cadence) || !positive_valid_input(distance, duration, cadence)) {
                return alert("Inputs have to be +ve number");
            }
            workout = new running([lat, lng], distance, duration, cadence)

        }
        this.#workout_data.push(workout)
        form.classList.add("hidden");

        console.log(this.#workout_data);
        // ADD  NEW OBJECT TO WORKOUT ARRAY



        // RENDER WORKOUT ON THE MAP 




        //RENDER WORKOUT ON LIST 




        // CLEAR INPUT FIELD + HIDE FORM


        // RENDER WORKOUT MARKER FUNCTION CALL
        this.renderworkoutMarker(workout)

        inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = "";



    }
    renderworkoutMarker(workout) {

        L.marker(workout.coords).addTo(this.#map).bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,

        })
        ).setPopupContent("workout.").openPopup();
    }
}
const mapobject = new app();




// create element 
const create_element_function = function () {


    const container = document.querySelector(".workouts");
    const fullhtml =
        `<li class="workout workout--running" data-id="1234567890">
<h2 class="workout__title">Running on April ${Workout.date}</h2>
<div class="workout__details">
  <span class="workout__icon">🏃‍♂️</span>
  <span class="workout__value">${distance}</span>
  <span class="workout__unit">km</span>
</div>
<div class="workout__details">
  <span class="workout__icon">⏱</span>
  <span class="workout__value">${duration}</span>
  <span class="workout__unit">min</span>
</div>
<div class="workout__details">
  <span class="workout__icon">⚡️</span>
  <span class="workout__value">${pacecalc}</span>
  <span class="workout__unit">min/km</span>
</div>
<div class="workout__details">
  <span class="workout__icon">🦶🏼</span>
  <span class="workout__value">178</span>
  <span class="workout__unit">spm</span>
</div>
</li >`;
    container.innerHTML = fullhtml;
}