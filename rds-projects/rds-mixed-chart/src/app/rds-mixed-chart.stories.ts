import { Story, Meta } from '@storybook/angular/types-6-0';
import { updateLocale } from 'ngx-bootstrap/chronos';
import { AppComponent } from './app.component';
export default {
    title: 'Elements/Mixed Chart',
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
  export const MixedChart = Template.bind({});
MixedChart.args = {

  chartDatasets: [
    {
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 30, 32],
      backgroundColor: ['orange']
    },
    {
      type: 'line',
      label: 'Line Dataset',
      data: [15, 30, 40, 45],
      borderColor: 'rgba(75, 192, 192, 0.8)'
    }
  ],

  chartLabels: ['January', 'February', 'March', 'April'],
  chartType: 'scatter',
  chartWidth: 500,

  chartOptions: {
    radius:10, 
    pointStyle:'triangle',
    plugins: {
legend: {
        position: 'left',
        align: "start",
        pointStyle: "bottom",
        labels: {
          usePointStyle: true
        }
      },
      tooltip: {
        usePointStyle: true,
      },
    },
    responsive: true,

    scales: {
      y: {
        beginAtZero: true
      }
    }
  },

};