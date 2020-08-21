import {
  toggleMenu,
  menuBox,
  clickOutside,
  search,
  searchPlaces,
  inputField,
  apiKey,
  updatePlace,
} from './app/variables.js';
import getDay from './app/updateday.js';
import handleFetch from './app/handlefetch.js';

export let cityAndCountry, latitude, longitude, city, country;

window.onload = () => {
  //console.log(API_KEY_SPLASH);
  cityAndCountry = 'Brussels, BE';
  init(50.85, 4.35, cityAndCountry);
};

toggleMenu.addEventListener('click', () => {
  menuBox.classList.toggle('hidden');
});
clickOutside.addEventListener('click', () => {
  menuBox.classList.add('hidden');
});

searchPlaces.addListener('places_changed', () => {
  const place = searchPlaces.getPlaces()[0];
  city = place.vicinity;
  place.address_components.forEach((component) => {
    if (component.types[0] === 'country') {
      country = component.short_name;
    }
  });
  if (place == null) return;
  latitude = place.geometry.location.lat();
  longitude = place.geometry.location.lng();
  console.log(place);
  cityAndCountry = `${city}, ${country}`;
});
search.addEventListener('click', (e) => {
  e.preventDefault();
  inputField.value = '';
  init(latitude, longitude, cityAndCountry);
});
inputField.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    inputField.value = '';
    init(latitude, longitude, cityAndCountry);
  }
});

async function init(lat, lon, place) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${apiKey}`,
  )
    .then((response) => {
      return response.json();
    })
    .then(handleFetch);
  getDay();
  updatePlace.textContent = place;
}
