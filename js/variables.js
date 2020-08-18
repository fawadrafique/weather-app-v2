const search = document.querySelector('#search')
const inputField = document.querySelector('#inputField')
const menuBox = document.querySelector('#menuBox')
const toggleMenu = document.querySelector('#toggleMenu')
const clickOutside = document.querySelector('#clickOutside')
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
const searchPlaces = new google.maps.places.SearchBox(searchAtrribute)


export {
    search,
    inputField,
    menuBox,
    toggleMenu,
    clickOutside,
    updateDay,
    updatePlace,
    updateTemp,
    summary,
    icon,
    minmaxT,
    searchAtrribute,
    windSpeed,
    humidity,
    uvindex,
    feelT,
    footer,
    chart,
    searchPlaces
}