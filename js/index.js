

/// <reference types="../@types/jquery"/>
const ctx = document.getElementById("myChart");


function createChart(data, type="bar") {

  return new Chart(ctx, {
    type: type,
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Amount Per Day",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          
          // backgroundColor: null,
          // backgroundColor: [
          //   'rgba(255, 99, 132,0.8)',
          //   'rgba(255, 159, 64,0.8)',
          //   'rgba(255, 205, 86,0.8)',
          //   'rgba(75, 192, 192,0.8)',
          //   'rgba(54, 162, 234,0.8)',
          //   'rgba(153, 102, 254,0.8)',
          //   'rgba(201, 203, 207,0.8)'
          // ],
          // borderColor: [
          //   'rgb(255, 99, 132)',
          //   'rgb(255, 159, 64)',
          //   'rgb(255, 205, 86)',
          //   'rgb(75, 192, 192)',
          //   'rgb(54, 162, 235)',
          //   'rgb(153, 102, 255)',
          //   'rgb(201, 203, 207)'
          // ],


        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        display: false
      },
    },
  });
}

 let x =createChart();


function setChartType(chartType){
  // To change the chart type we have first to destroy the current
  // chart object. 
  x.destroy();

  // Next we render a new one passing-in, the `Jsondata`
  // and the `chartType` that the button sends.
  x=createChart(null, chartType);
}

