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
export default updateForecast;