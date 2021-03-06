import getHour from './gethour.js'

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
export default getIcon;