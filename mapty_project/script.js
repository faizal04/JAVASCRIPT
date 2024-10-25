'use strict';

// prettier-ignoreconst months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
    _setdescription() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`

    }
}

class Cycling extends Workout {
    type = "cycling";
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.speedcalc();
        this._setdescription();


    }

    speedcalc() {
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}
class running extends Workout {
    type = "running";
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.pacecalc();
        this._setdescription();

    }
    pacecalc() {
        this.pace = this.duration / this.distance;
        return this.pace;
    }

}



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

    _hideForm() {
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
            '';

        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => form.style.display = "grid", 1000);
    }

    _toggleElevationField() {
        inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
        inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    }

    _newWorkout(e) {
        const validInput = (...input) => input.every(imp => Number.isFinite(imp));
        const positive_valid_input = (...input) => input.every(imp => imp > 0);
        e.preventDefault();

        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapevent.latlng;
        let workout;
        if (type === "cycling") {
            const elevation = +inputElevation.value;
            console.log("cycling check");

            if (!validInput(distance, duration, elevation) || !positive_valid_input(distance, duration)) {
                return alert("Inputs have to be +ve number");
            }
            workout = new Cycling([lat, lng], distance, duration, elevation)
        }
        if (type === "running") {
            const cadence = +inputCadence.value;
            console.log("running check");

            if (!validInput(distance, duration, cadence) || !positive_valid_input(distance, duration, cadence)) {
                return alert("Inputs have to be +ve number");
            }
            workout = new running([lat, lng], distance, duration, cadence)
        }
        this.#workout_data.push(workout)
        this._renderworkoutMarker(workout);
        this._renderWorkout(workout);
        this._hideForm();
        inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = "";
    }

    _renderworkoutMarker(workout) {
        L.marker(workout.coords).addTo(this.#map).bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
        })
        ).setPopupContent(`${workout.type === "running" ? "🏃‍♂️Running on" : "🚴‍♀️"
            }`);
    }

    _renderWorkout(workout) {
        let html =
            `<li class="workout workout--${workout.type}" data - id="${workout.id}" >
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
            }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div >
        <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
        </div>`;
        if (workout.type === "running") {
            html += ` <div class="workout__details">
              <span class="workout__icon">⚡️</span>
               <span class="workout__value">${workout.pace.toFixed(1)}</span>
              <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">🦶🏼</span>
              <span class="workout__value">${workout.cadence}</span>
              <span class="workout__unit">spm</span>
            </div>
          </li>`;
        }
        else {
            html += `     
          <div class="workout__details">
                  <span class="workout__icon">⚡️</span>
                  <span class="workout__value">${workout.speed.toFixed(1)}</span>
                  <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                  <span class="workout__icon">⛰</span>
                  <span class="workout__value">${workout.elevationGain}</span>
                  <span class="workout__unit">m</span>
                </div>`
        }
        form.insertAdjacentHTML('afterend', html)
    }
}
const mapobject = new app();



