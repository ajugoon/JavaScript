
var myChart = null;


var xValues = [1981,1984,1987,1990,1993,1996,1999,2002,2005,2008];
var yValues = ["0","201115","427196","684484.5","1568003.5","4176950.5","10999603.5","8249182.5","3757383","1432077.5"];

var graphID = document.getElementById("myLineGraph").getContext("2d");
var graphIDnumber = document.getElementById("myLineGraph");

//console.log(graphIDnumber);


document.getElementById("button1").onclick = function() {


    let chartStatus = Chart.getChart("myLineGraph"); // <canvas> id
    console.log(chartStatus);
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }

    //-- End of chart destroy 

    var graphConfig = {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
            label: 'Cost to Close to the Poverty Gap in $USD',
            data: yValues,
            backgroundColor: '#E43C18',
            borderColor: '#19E418',
            color: '#DB18E4'
            }]
        }
    };

    var myChart = new Chart(graphID, graphConfig);

}//end function  

// Reference: https://stackoverflow.com/questions/40056555/destroy-chart-js-bar-graph-to-redraw-other-graph-in-same-canvas

