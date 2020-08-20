import {
    footer,
} from './variables.js';
import fetch from 'node-fetch';
global.fetch = fetch;
import Unsplash, {
    toJson
} from 'unsplash-js';
const unsplash = new Unsplash({
    accessKey: "jRPGWBPEGuRHvLEve0t7QHqzx0a7NsWSv_FY-atuTWs"
});


function updateBackground(city) {
    //console.log(accessKey);
    unsplash.search.photos(city, 1, 10, {
            orientation: "landscape"
        })
        .then(toJson)
        .then(json => {
            console.log(json)
            let rand = Math.floor(Math.random() * 10);
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundImage = `url('${json.results[rand].urls.regular}')`;
            footer.innerHTML = `Photo by: <a class="underline" href='${json.results[rand].links.html}'>${json.results[rand].user.name}</a> on <a class="underline" href='https://unsplash.com/'>Unsplash</a>`
        });
}

export default updateBackground;