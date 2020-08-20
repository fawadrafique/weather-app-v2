/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/background.js":
/*!*******************************!*\
  !*** ./src/app/background.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./src/app/variables.js");


function updateBackground(city) {
    const apiKey = `jRPGWBPEGuRHvLEve0t7QHqzx0a7NsWSv_FY-atuTWs`
    const apiCall = `https://api.unsplash.com/search/photos?page=1&query=${city} city&order_by=popular&orientation=landscape&client_id=${apiKey}`
    fetch(apiCall)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            //console.log(data)
            let rand = Math.floor(Math.random() * 10);
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundImage = `url('${data.results[rand].urls.regular}')`;
            _variables_js__WEBPACK_IMPORTED_MODULE_0__["footer"].innerHTML = `Photo by: <a class="underline" href='${data.results[rand].links.html}'>${data.results[rand].user.name}</a> on <a class="underline" href='https://unsplash.com/'>Unsplash</a>`
        })
}

/* harmony default export */ __webpack_exports__["default"] = (updateBackground);

/***/ }),

/***/ "./src/app/currentweather.js":
/*!***********************************!*\
  !*** ./src/app/currentweather.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./src/app/variables.js");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons.js */ "./src/app/icons.js");
/* harmony import */ var _updateday_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateday.js */ "./src/app/updateday.js");




let minTemperature, maxTemperature;

function weather(data) {

    minTemperature = Math.round(data.daily[0].temp.min)
    maxTemperature = Math.round(data.daily[0].temp.max)
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["updateTemp"].textContent = Math.round(data.current.temp);
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["minmaxT"].innerHTML = `L <strong class="text-lg">${minTemperature}º</strong> - H <strong class="text-lg">${maxTemperature}º</strong>`
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["updateDay"].textContent = Object(_updateday_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.current.dt);
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["summary"].textContent = data.current.weather[0].main;
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["windSpeed"].textContent = `${Math.round(data.current.wind_speed*3.5997)} km/h`
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["humidity"].textContent = `${data.current.humidity} %`
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["uvindex"].textContent = `${data.current.uvi}`
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["feelT"].textContent = `${Math.round(data.current.feels_like)}º`
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["icon"].innerHTML = Object(_icons_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data, 'withTag');
}
/* harmony default export */ __webpack_exports__["default"] = (weather);

/***/ }),

/***/ "./src/app/forecast.js":
/*!*****************************!*\
  !*** ./src/app/forecast.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function updateForecast(data) {
    let style, d, day, iconID, weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 1; i < 7; i++) {
        d = new Date(data.daily[i].dt * 1000);
        day = weekdays[d.getDay()];
        iconID = data.daily[i].weather[0].id;
        let minT = Math.round(data.daily[i].temp.min);
        let maxT = Math.round(data.daily[i].temp.max);
        style = `<span class="font-normal block">${day}</span>
    <span class="flex justify-center text-3xl">
      <i class="wi wi-owm-${iconID}"></i>
    </span>
    <span class="block">
      <span class="text-xs">L </span><span class="text-sm">${minT}º - </span><span class="text-xs">H</span>
      <span class="text-sm">${maxT}º</span>
    </span>`
        document.querySelector(`#day${i}`).innerHTML = style;
    }


}
/* harmony default export */ __webpack_exports__["default"] = (updateForecast);

/***/ }),

/***/ "./src/app/gethour.js":
/*!****************************!*\
  !*** ./src/app/gethour.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getHour(ms) {
    let d = new Date(ms * 1000);
    let t = d.getHours()
    if (t < 10) return `0${t}:00`
    else return `${t}:00`
}
/* harmony default export */ __webpack_exports__["default"] = (getHour);

/***/ }),

/***/ "./src/app/handlefetch.js":
/*!********************************!*\
  !*** ./src/app/handlefetch.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currentweather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentweather.js */ "./src/app/currentweather.js");
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.js */ "./src/app/background.js");
/* harmony import */ var _forecast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast.js */ "./src/app/forecast.js");
/* harmony import */ var _updatechart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updatechart.js */ "./src/app/updatechart.js");
/* harmony import */ var _widget_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget.js */ "./src/app/widget.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index.js */ "./src/index.js");









function handleFetch(data) {
    Object(_currentweather_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    Object(_widget_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data, _index_js__WEBPACK_IMPORTED_MODULE_5__["cityAndCountry"])
    Object(_forecast_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    Object(_background_js__WEBPACK_IMPORTED_MODULE_1__["default"])(city);
    Object(_updatechart_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
}
/* harmony default export */ __webpack_exports__["default"] = (handleFetch);

/***/ }),

/***/ "./src/app/icons.js":
/*!**************************!*\
  !*** ./src/app/icons.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gethour_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gethour.js */ "./src/app/gethour.js");


function getIcon(data, tag) {
    let iconID;
    const date = new Date();
    const sunrise = new Date(data.current.sunrise * 1000);
    const sunset = new Date(data.current.sunset * 1000);

    if (date.getHours() >= sunrise.getHours() && date.getHours() < sunset.getHours()) {
        iconID = `wi wi-owm-day-${data.current.weather[0].id}`;
    } else {
        iconID = `wi wi-owm-night-${data.current.weather[0].id}`;
    }
    switch (tag) {
        case 'withTag':
            return `<i class="${iconID}"></i>`
        case 'noTag':
            return iconID
    }
}
/* harmony default export */ __webpack_exports__["default"] = (getIcon);

/***/ }),

/***/ "./src/app/updatechart.js":
/*!********************************!*\
  !*** ./src/app/updatechart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gethour_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gethour.js */ "./src/app/gethour.js");


function updateChart(data) {
    let d, temp = [],
        t,
        time = [];
    for (let i = 0; i < 25; i++) {
        time.push(Object(_gethour_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.hourly[i].dt));
        temp.push(Math.round(data.hourly[i].temp));
        i += 3;
    }
    let tMin = Math.min(...temp) - 5
    let tMax = Math.max(...temp) + 5
    t = temp.map(String)
    // display(time)
    // display(t)
    // display(tMin)
    // display(tMax)

    let myChart = new Chart(chart, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                data: t,
                backgroundColor: '#718096',
                borderColor: "#fff",
                borderWidth: 2,
                lineTension: 0,
                pointBorderColor: "#fff",
                pointBackgroundColor: "#718096",
                pointRadius: 4,
                pointBorderWidth: 2,
                showTooltips: false
            }],

        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontColor: '#fff'
                    },
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                        min: tMin,
                        max: tMax
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            hover: {
                mode: null
            },
            plugins: {
                // Change options for ALL labels of THIS CHART
                datalabels: {

                    color: '#fff',
                    align: 'top',
                    formatter: function (value) {
                        return value + 'º';
                    }
                }

            }
        }
    })
}

/* harmony default export */ __webpack_exports__["default"] = (updateChart);

/***/ }),

/***/ "./src/app/updateday.js":
/*!******************************!*\
  !*** ./src/app/updateday.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getDay(ms) {
    let today = new Date(ms * 1000);
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };

    return today.toLocaleString(
        "en-GB",
        options
    );
}
/* harmony default export */ __webpack_exports__["default"] = (getDay);

/***/ }),

/***/ "./src/app/variables.js":
/*!******************************!*\
  !*** ./src/app/variables.js ***!
  \******************************/
/*! exports provided: search, inputField, menuBox, menuWidget, toggleMenu, clickOutside, updateDay, updatePlace, updateTemp, summary, icon, minmaxT, windSpeed, humidity, uvindex, feelT, footer, chart, searchPlaces, apiKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputField", function() { return inputField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuBox", function() { return menuBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuWidget", function() { return menuWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMenu", function() { return toggleMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickOutside", function() { return clickOutside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDay", function() { return updateDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlace", function() { return updatePlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTemp", function() { return updateTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summary", function() { return summary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minmaxT", function() { return minmaxT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windSpeed", function() { return windSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humidity", function() { return humidity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uvindex", function() { return uvindex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feelT", function() { return feelT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chart", function() { return chart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPlaces", function() { return searchPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiKey", function() { return apiKey; });
const search = document.querySelector('#search');
const inputField = document.querySelector('#inputField');
const menuBox = document.querySelector('#menuBox');
const menuWidget = document.querySelector('#menuWidget');
const toggleMenu = document.querySelector('#toggleMenu');
const clickOutside = document.querySelector('#clickOutside');
const updateTemp = document.querySelector('#temperature');
const summary = document.querySelector('#summary');
const icon = document.querySelector('#icon');
const updatePlace = document.querySelector('#city');
const updateDay = document.querySelector('#day');
const minmaxT = document.querySelector('#minmaxT');
//const searchAtrribute = document.querySelector('[placesearch]')
const windSpeed = document.querySelector('#windSpeed');
const humidity = document.querySelector('#humidityPercent');
const uvindex = document.querySelector('#uvindex');
const feelT = document.querySelector('#feelslike');
const footer = document.querySelector('#footer');
const chart = document.querySelector('#chart').getContext('2d');
const searchPlaces = new google.maps.places.SearchBox(inputField);
const apiKey = `94bc76131465087810a5fcee2f66defe`;







/***/ }),

/***/ "./src/app/widget.js":
/*!***************************!*\
  !*** ./src/app/widget.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./src/app/variables.js");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons.js */ "./src/app/icons.js");


let i = 0,
    icon;
//del = {};

function addWidget(data, cityAndCountry) {
    icon = Object(_icons_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data, 'noTag')

    if (i <= 2) {
        i++
        console.log(i)
        document.querySelector(`#city${i}`).textContent = cityAndCountry
        document.querySelector(`#temp${i}`).innerHTML = `<span class="text-xs">L </span><span class="text-sm">${Math.round(data.daily[0].temp.min)}º - </span><span class="text-xs">H</span>
              <span class="text-sm">${Math.round(data.daily[0].temp.max)}º</span>`
        document.querySelector(`#icon${i}`).innerHTML = `<i class="${icon} text-3xl"></i>`
        if (i == 2) i = 0;
    }

    //     del[`del${i}`] = document.querySelector(`#del${i}`);
    //     console.log(del)

}
/* harmony default export */ __webpack_exports__["default"] = (addWidget);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: cityAndCountry, latitude, longitude, city, country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityAndCountry", function() { return cityAndCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latitude", function() { return latitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longitude", function() { return longitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "city", function() { return city; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "country", function() { return country; });
/* harmony import */ var _app_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/variables.js */ "./src/app/variables.js");
/* harmony import */ var _app_updateday_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/updateday.js */ "./src/app/updateday.js");
/* harmony import */ var _app_handlefetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/handlefetch.js */ "./src/app/handlefetch.js");








let cityAndCountry, latitude, longitude, city, country;

window.onload = () => {
    cityAndCountry = 'Brussels, BE'
    init(50.85, 4.35, cityAndCountry);
}

_app_variables_js__WEBPACK_IMPORTED_MODULE_0__["toggleMenu"].addEventListener('click', () => {
    menuBox.classList.toggle('hidden')
})
_app_variables_js__WEBPACK_IMPORTED_MODULE_0__["clickOutside"].addEventListener('click', () => {
    menuBox.classList.add('hidden')
})

_app_variables_js__WEBPACK_IMPORTED_MODULE_0__["searchPlaces"].addListener('places_changed', () => {
    const place = _app_variables_js__WEBPACK_IMPORTED_MODULE_0__["searchPlaces"].getPlaces()[0]
    city = place.vicinity
    place.address_components.forEach((component) => {
        if (component.types[0] == "country") {
            country = component.short_name;
        }
    });
    if (place == null) return
    latitude = place.geometry.location.lat()
    longitude = place.geometry.location.lng()
    console.log(place)
    cityAndCountry = `${city}, ${country}`;
})
_app_variables_js__WEBPACK_IMPORTED_MODULE_0__["search"].addEventListener('click', (e) => {
    e.preventDefault();
    inputField.value = ''
    init(latitude, longitude, cityAndCountry);

})
inputField.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        inputField.value = ''
        init(latitude, longitude, cityAndCountry);
    }
});

function init(lat, lon, place) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${_app_variables_js__WEBPACK_IMPORTED_MODULE_0__["apiKey"]}`)
        .then((response) => {
            return response.json()
        })
        .then(_app_handlefetch_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    Object(_app_updateday_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    _app_variables_js__WEBPACK_IMPORTED_MODULE_0__["updatePlace"].textContent = place;
}

/***/ })

/******/ });