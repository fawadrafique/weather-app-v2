import weather from './currentweather.js';
import updateBackground from './background.js';
import updateForecast from './forecast.js';
import updateChart from './updatechart.js';
import addWidget from './widget.js';
import {
    cityAndCountry
} from './index.js';



function handleFetch(data) {
    weather(data);
    addWidget(data, cityAndCountry)
    updateForecast(data);
    updateBackground(city);
    updateChart(data);
}
export default handleFetch;