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
export default getDay;