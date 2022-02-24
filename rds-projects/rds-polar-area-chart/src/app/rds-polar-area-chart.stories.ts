import { Story, Meta } from '@storybook/angular/types-6-0';
import { updateLocale } from 'ngx-bootstrap/chronos';
import { AppComponent } from './app.component';

export default {
  title: 'ELEMENTS/Polar Area Chart',
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


export const PolarAreaChart = Template.bind({});
PolarAreaChart.args = {
  chartDatasets: [
    {
      label: 'Dataset 1',
      data: [100, 70, 80, 96, 87, 77],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(167, 145, 78, 0.2)'
      ],
      borderColor: [
        '#fff',
      ],
    }
  ],
  chartLabels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  chartType: 'polarArea',
  chartWidth: 400,
  chartOptions: {
    animation:{
      animateRotate:true,
      animateScale:false
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
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
        text: 'Polar Area Chart'
      }
    }
  },
};
