// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { updateLocale } from 'ngx-bootstrap/chronos';
import { AppComponent } from './app.component';

export default {
  title: 'Elements/Area Chart ',
  component: AppComponent,
  argTypes: {
    canvasBackgroundColor: { control: 'color' },
    ChartStyle: {
      options: ['Dark', 'light'],
      control: 'radio'
    }
  },

} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,

});




export const AreaChart = Template.bind({});
AreaChart.args = {
  chartDatasets: [
    {
      label: 'Dataset 1',
      data: [0.5, 0.8, 0.4, 0.6, 0.7, 0.2, 0.9],
      borderColor: 'rgba(75, 192, 192, 0.8)',
      fill: true,
      tension: 0.1
    }
  ],
  chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
  chartType: 'line',
  chartWidth: 600,

  chartOptions: {
    pointStyle: "star",
    radius: 7,
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
        align: "start",
        pointStyle: "bottom",
        labels: {
          usePointStyle: true
        },

      },
      tooltip: {
        usePointStyle: true,
      },
      filler: {
        propagate: false,
      },
      title: {
        display: true,
        text: 'Area Chart with boundries'
      }
    },
    interaction: {
      intersect: false,
    }
  },
};





