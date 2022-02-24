import { Story, Meta } from '@storybook/angular/types-6-0';
import { updateLocale } from 'ngx-bootstrap/chronos';
import { AppComponent as RdsChartDoughnut} from './app.component';

export default {
  title: 'Elements/Doughnut Chart',
  component: RdsChartDoughnut,
  argTypes: {
    canvasBackgroundColor: { control: 'color' },
    ChartStyle:{
      options: ['Dark','light'],
      control:'radio'}
  },

} as Meta;

const Template: Story<RdsChartDoughnut> = (args: RdsChartDoughnut) => ({
  props: args,

});

export const DoughnutChart = Template.bind({});
DoughnutChart.args = {
  chartDatasets: [
    {
      label: 'Dataset 1',
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
  chartType: 'doughnut',
  chartWidth: 300,
  chartOptions: {
   
    responsive: true,
    circumference:350,
    radius:100,
    animation:{
      animateRotate:true,
      animateScale:false
    },
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
        // text: 'Doughnut Chart'
        text: ' Utilized  :  95 %'
      },
      centerText: {
        display: true,
        text: "280"
      }
    }
  },


};