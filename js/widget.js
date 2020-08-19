import {
    menuWidget
} from './variables.js'
import getIcon from './icons.js'
let i = 0,
    icon;
//del = {};

function addWidget(data, cityAndCountry) {
    i++
    icon = getIcon(data, 'noTag')

    if (i <= 2) {
        console.log(i)
        document.querySelector(`#city${i}`).textContent = cityAndCountry
        document.querySelector(`#temp${i}`).innerHTML = `<span class="text-xs">L </span><span class="text-sm">${Math.round(data.daily[0].temp.min)}º - </span><span class="text-xs">H</span>
              <span class="text-sm">${Math.round(data.daily[0].temp.max)}º</span>`
        document.querySelector(`#icon${i}`).innerHTML = `<i class="${icon} text-3xl"></i>`
    } else i = 0;

    //     del[`del${i}`] = document.querySelector(`#del${i}`);
    //     console.log(del)

}
export default addWidget;