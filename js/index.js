import * as constants from './variables.js';
import getDay from './updateday.js'
import updateBackground from './background.js';
import updateForecast from './forecast.js';
import updateChart from './updatechart.js';
import getIcon from './icons.js';


let apiCall, country;

window.onload = () => {
    init(50.85, 4.35, 'Brussels', 'BE');
}

toggleMenu.addEventListener('click', () => {
    constants.menuBox.classList.toggle('hidden')
})
clickOutside.addEventListener('click', () => {
    constants.menuBox.classList.add('hidden')
})


constants.searchPlaces.addListener('places_changed', () => {
    const place = searchPlaces.getPlaces()[0]
    let city = place.vicinity
    place.address_components.forEach((component) => {
        if (component.types[0] == "country") {
            country = component.short_name;
        }
    });
    if (place == null) return
    let latitude = place.geometry.location.lat()
    let longitude = place.geometry.location.lng()
    display(place)
    search.addEventListener('click', (e) => {
        e.preventDefault();
        inputField.value = ''
        init(latitude, longitude, city, country);
        getDay();
    })
})

function init(lat, lon, city, country) {
    // let city = name;
    const apiKey = `94bc76131465087810a5fcee2f66defe`;
    apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${apiKey}`
    //display(apiCall)
    fetch(apiCall)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            constants.updateTemp.textContent = Math.round(data.current.temp);
            constants.updatePlace.textContent = `${city}, ${country}`;
            constants.minmaxT.innerHTML = `L <strong class="text-lg">${Math.round(data.daily[0].temp.min)}º</strong> - H <strong class="text-lg">${Math.round(data.daily[0].temp.max)}º</strong>`
            constants.updateDay.textContent = getDay(data.current.dt);
            constants.summary.textContent = data.current.weather[0].main;
            constants.windSpeed.textContent = `${Math.round(data.current.wind_speed*3.5997)} km/h`
            constants.humidity.textContent = `${data.current.humidity} %`
            constants.uvindex.textContent = `${data.current.uvi}`
            constants.feelT.textContent = `${Math.round(data.current.feels_like)}º`
            constants.icon.innerHTML = getIcon(data);
            updateForecast(data);
            updateBackground(city);
            updateChart(data);
        })
}