import weather from './currentweather.js';
import updateBackground from './background.js';
import updateForecast from './forecast.js';
import updateChart from './updatechart.js';
import addWidget from './widget.js';
import { cityAndCountry } from '../index.js';

async function handleFetch(data) {
  await weather(data);
  await addWidget(data, cityAndCountry);
  await updateForecast(data);
  await updateBackground(cityAndCountry);
  await updateChart(data);
}
export default handleFetch;
