// import Chart from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

let lat, lon, apiCall, country;
const searchBox = document.querySelector('#searchBox')
const searchClose = document.querySelector('#searchClose')
const searchOpen = document.querySelector('#searchOpen')
const updateTemp = document.querySelector('#temperature')
const summary = document.querySelector('#summary')
const icon = document.querySelector('#icon')
const updatePlace = document.querySelector('#city')
const updateDay = document.querySelector('#day')
const minmaxT = document.querySelector('#minmaxT')
const searchAtrribute = document.querySelector('[placesearch]')
const windSpeed = document.querySelector('#windSpeed')
const humidity = document.querySelector('#humidityPercent')
const uvindex = document.querySelector('#uvindex')
const feelT = document.querySelector('#feelslike')
const footer = document.querySelector('#footer')
const chart = document.querySelector('#chart').getContext('2d')


window.onload = () => {
    init(50.85, 4.35, 'Brussels', 'BE');
}

searchOpen.addEventListener('click', () => {
    searchOpen.classList.toggle('hidden')
    searchBox.classList.toggle('hidden')
})
searchClose.addEventListener('click', () => {
    searchOpen.classList.toggle('hidden')
    searchBox.classList.toggle('hidden')
})


const searchPlaces = new google.maps.places.SearchBox(searchAtrribute)
searchPlaces.addListener('places_changed', () => {
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
    init(latitude, longitude, city, country);
    getDay();
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
            display(data);
            updateTemp.textContent = Math.round(data.current.temp);
            updatePlace.textContent = `${city}, ${country}`;
            minmaxT.innerHTML = `L <strong class="text-lg">${Math.round(data.daily[0].temp.min)}º</strong> - H <strong class="text-lg">${Math.round(data.daily[0].temp.max)}º</strong>`
            updateDay.textContent = getDay(data.current.dt);
            summary.textContent = data.current.weather[0].main;
            windSpeed.textContent = `${Math.round(data.current.wind_speed*3.5997)} km/h`
            humidity.textContent = `${data.current.humidity} %`
            uvindex.textContent = `${data.current.uvi}`
            feelT.textContent = `${Math.round(data.current.feels_like)}º`
            icon.innerHTML = getIcon(data);
            updateForecast(data);
            updateBackground(city);
            updateChart(data);
        })
}

function updateChart(data) {
    let d, temp = [],
        t,
        time = [];
    for (let i = 0; i < 25; i++) {
        time.push(getHour(data.hourly[i].dt));
        temp.push(Math.round(data.hourly[i].temp));
        i += 3;
    }
    let tMin = Math.min(...temp) - 5
    let tMax = Math.max(...temp) + 5
    t = temp.map(String)
    display(time)
    display(t)
    display(tMin)
    display(tMax)

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

function updateBackground(city) {
    const apiKey = `jRPGWBPEGuRHvLEve0t7QHqzx0a7NsWSv_FY-atuTWs`
    const apiCall = `https://api.unsplash.com/search/photos?page=1&query=${city} city&order_by=popular&orientation=landscape&client_id=${apiKey}`
    fetch(apiCall)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            display(data)

            let rand = Math.floor(Math.random() * 10);
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundImage = `url('${data.results[rand].urls.regular}')`;
            footer.innerHTML = `Photo by: <a class="underline" href='${data.results[rand].links.html}'>${data.results[rand].user.name}</a> on <a class="underline" href='https://unsplash.com/'>Unsplash</a>`
        })

}

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

function getIcon(data) {
    let iconID;
    const date = new Date();
    const sunrise = new Date(data.current.sunrise * 1000);
    const sunset = new Date(data.current.sunset * 1000);
    if (date.getHours() >= sunrise.getHours() && date.getHours() < sunset.getHours()) {
        iconID = `wi wi-owm-day-${data.current.weather[0].id}`;
    } else {
        iconID = `wi wi-owm-night-${data.current.weather[0].id}`;
    }
    return `<i class="${iconID}"></i>`
}

function getHour(ms) {
    let d = new Date(ms * 1000);
    let t = d.getHours()
    if (t < 10) return `0${t}:00`
    else return `${t}:00`
}

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

function display(message) {
    console.log(message);
}