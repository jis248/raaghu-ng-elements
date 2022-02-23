import { Story, Meta } from '@storybook/angular/types-6-0';
import { updateLocale } from 'ngx-bootstrap/chronos';
import { AppComponent } from './app.component';

export default {
  title: 'ELEMENTS/Bubble Chart',
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

export const BubbleChart = Template.bind({});
BubbleChart.args = {
  chartDatasets: [
    {
      label: 'Dataset 1',
      data: [90, 97, 20, 30, 40, 50, 60, 70],
      borderColor: ['red'],
      backgroundColor: ['rgba(255, 99, 132)'],
    },
    {
      label: 'Dataset 2',
      data: [90, 80, 70, 60, 50, 40, 30, 90, 98],
      borderColor: ['orange'],
      backgroundColor: ['rgba(255, 206, 86)'],
    }
  ],
  chartLabels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  chartType: 'bubble',
  chartWidth: 500,
  chartOptions: {
    responsive: true,
    radius:10,
    pointStyle:'triangle',
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
        text: 'Bubble Chart'
      }
    },

  },
};