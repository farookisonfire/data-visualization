import Highcharts from 'highcharts';
import $ from 'jquery';

const buildBarGraph = (barGraphOptions) => {
  return $(function () {

    let myChart = Highcharts.chart('my-bar-graph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total Enrolled By Program Type and Session'
        },
        xAxis: {
              categories: ['May 22 - May 26', 'May 29 - June 2', 'June 5 - June 9', 'June 12 - June 16', 'June 19 - June 23', 'June 26 - June 30', 'July 3 - July 7', 'July 10 - July 14', 'July 17 - July 21', 'July 24 - July 28', 'July 31 - Aug 4', 'Aug 7 - Aug 11', 'Aug 14 - Aug 18', 'Aug 21 - Aug 25']
          },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Enrolled'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'YE - 1 week',
            data: [1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0]
        }, {
            name: 'YE - 2 week',
            data: [1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0]
        },
        {
            name: 'YE - 4 week',
            data: [1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0]
        },
        {
            name: 'HI - 2 week',
            data: [1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0]
        },
        {
            name: 'HI - 4 week',
            data: [1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0]
        }
      ]
      });
    });
};

export default buildBarGraph;
