import getHour from './gethour.js'

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

export default updateChart;