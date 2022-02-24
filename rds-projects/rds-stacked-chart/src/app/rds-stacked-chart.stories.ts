import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsStackedChartComponent } from './app.component';
export default {

  title: 'ELEMENTS/Stacked Chart',

  component: RdsStackedChartComponent,
  argTypes: {
    canvasBackgroundColor: { control: 'color' },
    ChartStyle: {
      options: ['Dark', 'light'],
      control: 'radio'
    }
  },

} as Meta;

const Template: Story<RdsStackedChartComponent> = (args: RdsStackedChartComponent) => ({
  props: args,

});
export const stackedChart = Template.bind({});
stackedChart.args = {
  chartDatasets: [
    {
      label: 'My Second dataset',
      data: [131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142],
      borderColor: 'white',
      backgroundColor: '#62D5D9',
      fill: true
    },
    {
      label: 'My Third dataset',
      data: [151, 152, 159, 154, 155, 156, 157, 158, 159, 160, 161, 162],
      borderColor: 'white',
      backgroundColor: '#928AE0',
      fill: true
    },
    {
      label: 'My Fourth dataset',
      data: [150, 201, 160, 203, 151, 205, 206, 207, 208, 209, 210, 211],
      borderColor: 'white',
      backgroundColor: '#EDB371',
      fill: true
    }
  ],
  chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  chartType: 'line',
  chartWidth: 1000,
  chartOptions: {
    radius: 3,
    pointStyle: 'triangle',
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - stacked'
      },
      tooltip: {
        mode: 'index'
      },
      legend: {
        pointStyle: "circle",
        labels: {
          usePointStyle: true,
        },
        tooltip: {
          usePointStyle: true,
        },
      }
    },
    interaction: {

      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  },
};
