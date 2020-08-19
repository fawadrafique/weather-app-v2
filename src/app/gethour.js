function getHour(ms) {
    let d = new Date(ms * 1000);
    let t = d.getHours()
    if (t < 10) return `0${t}:00`
    else return `${t}:00`
}
export default getHour;