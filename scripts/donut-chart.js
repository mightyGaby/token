function generateTokenChart(){
  var ctx = document.getElementById("donut-chart");

  labelData = ["Phase 1", "Phase 2", "Phase 3", "Phase 4"]
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: labelData,
          datasets: [{
              label: '# of Votes',
              data: [1,1,1,1],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend: {
          display: false,
          // labels: {
          //     fontColor: 'rgb(255, 99, 132)'
          // }
      }
      }
  });
};

generateTokenChart();
