import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
  title: 'Elements/Pie Chart',
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

export const pieChart = Template.bind({});
pieChart.args = {
  chartDatasets: [
    {
      label: 'Dataset1',
      data: [20, 10, 20, 40, 10],
      backgroundColor: [
        '#ff6384',
        '#ff9f40',
        '#ffcd56',
        '#4bc0c0',
        '#059bff',
      ],
      borderColor: [
        '#fff',
      ],
      borderWidth: 1
    }
  ],
  chartLabels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  chartWidth: 300,
  chartOptions: {
    circumference:360,
    radius:100,
    animation:{
      animateRotate:false,
      animateScale:true
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
      title: {
        display: true,
        text: 'Pie Chart'
      }
    }
  },
};