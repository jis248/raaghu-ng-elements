import { Story, Meta } from '@storybook/angular/types-6-0';
import { updateLocale } from 'ngx-bootstrap/chronos';
import { AppComponent } from './app.component';

export default {
  title: 'ELEMENTS/Scatter Chart',
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

export const ScatterChart = Template.bind({});
ScatterChart.args = {
  chartDatasets: [
    {
      type: 'scatter',
      label: 'Scatter Dataset',
      data: [
        {
          x: -10,
          y: 0
        },
        {
          x: 0,
          y: 10
        },
        {
          x: 10,
          y: 5
        },
        {
          x: 0.5,
          y: 5.5
        }
      ],
      backgroundColor: 'rgb(255, 99, 132)'
    }
  ],
  chartLabels: ['January', 'February', 'March', 'April'],
  chartType: 'scatter',
  chartWidth: 500,
  chartOptions: {
    pointStyle :"triangle",
    radius:10,
    plugins: {
      legend: {
        position: 'bottom',
        align: "start",
        pointStyle: "line",
        labels: {
          usePointStyle: true
        }
      },
      tooltip: {
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  },
};
