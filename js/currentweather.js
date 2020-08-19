import * as constants from './variables.js';
import getIcon from './icons.js';
import getDay from './updateday.js';

let minTemperature, maxTemperature;

function weather(data) {

    minTemperature = Math.round(data.daily[0].temp.min)
    maxTemperature = Math.round(data.daily[0].temp.max)
    constants.updateTemp.textContent = Math.round(data.current.temp);
    constants.minmaxT.innerHTML = `L <strong class="text-lg">${minTemperature}º</strong> - H <strong class="text-lg">${maxTemperature}º</strong>`
    constants.updateDay.textContent = getDay(data.current.dt);
    constants.summary.textContent = data.current.weather[0].main;
    constants.windSpeed.textContent = `${Math.round(data.current.wind_speed*3.5997)} km/h`
    constants.humidity.textContent = `${data.current.humidity} %`
    constants.uvindex.textContent = `${data.current.uvi}`
    constants.feelT.textContent = `${Math.round(data.current.feels_like)}º`
    constants.icon.innerHTML = getIcon(data, 'withTag');
}
export default weather;