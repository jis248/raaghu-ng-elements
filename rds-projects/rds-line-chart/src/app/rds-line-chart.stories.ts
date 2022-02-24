import { Story, Meta } from '@storybook/angular/types-6-0';
import { updateLocale } from 'ngx-bootstrap/chronos';
import { AppComponent } from './app.component';

export default {
  title: 'ELEMENTS/Line Chart',
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

export const Basic = Template.bind({});
Basic.args = {
 
  chartDatasets: [
    { 
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
     
    }
   ],
  chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  chartWidth: 600,
  chartOptions: {
   
    plugins: {
      legend: {
        position: 'right',
        align: "start",
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
                text: 'Line Chart',
                Position:'left',
                align:'center',
                color:'#666'
            }
    },
    scales:{
      x:{
        ticks:{
          color:'#666'
        }
      },
      y:{
        ticks:{
          color:'#666'
        }
      }
    }
  }
};