import { Story, Meta } from '@storybook/angular/types-6-0';
import { updateLocale } from 'ngx-bootstrap/chronos';
import { AppComponent } from './app.component';

export default {
  title: 'Elements/Horizontal Bar Chart',
  component: AppComponent,
  argTypes: {
    canvasBackgroundColor: { control: 'color' },
    ChartStyle:{
      options: ['Dark','light'],
      control:'radio'}
  },

} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,

});

export const HorizontalBarChart = Template.bind({});
HorizontalBarChart.args = {
  chartDatasets: [
    {
      label: 'Dataset 1',
      data: [20, 30, 50, 80, 98, 95, 55],
      backgroundColor: 'rgba(75, 192, 192, 1)',
      borderColor: 'rgba(75, 192, 192, 1)'
    },
    {
      label: 'Dataset 2',
      data: [15, 67, 34, 78, 45, 87, 76],
      backgroundColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: 'Dataset 3',
      data: [31, 52, 43, 91, 74, 93, 76],
      backgroundColor: 'rgba(255, 159, 64, 1)',
    }
  ],
  chartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  chartType: 'bar',
  chartWidth: 600,
  chartOptions: {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 0,
      }
    },
    plugins: {
      legend: {
        position: 'right',
        pointStyle: "line",

        labels: {

          usePointStyle: true
        }
      },
      tooltip: {
        usePointStyle: true,
      },
      title: {
        display: true,
        text: 'Horizontal Bar Chart'
      }
    }
  },
};