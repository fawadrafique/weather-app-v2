import {
    footer
} from './variables.js'

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
            footer.innerHTML = `Photo by: <a class="underline" href='${data.results[rand].links.html}'>${data.results[rand].user.name}</a> on <a class="underline" href='https://unsplash.com/'>Unsplash</a>`
        })
}

export default updateBackground;