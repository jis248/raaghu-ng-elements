import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';
export default {

  title: 'ELEMENTS/Bool Chart',

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

export const boolChart = Template.bind({});
boolChart.args = {
  chartDatasets: [
    {
      label: 'Dataset 1',
      data: [20, 10],
      fillStyle: 'blue',
      fillRect: [200, 100, 40, 10],
      backgroundColor: [
        '#01AE9D',
        '#E1E1E1'

      ],
      borderColor: [
        '#fff',
      ],
      borderWidth: 1,
      cutout: '90%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ],
  chartLabels: ['green', 'grey'],
  chartType: 'doughnut',
  chartWidth: 300,
  chartOptions: {

    elements: {

      center: {
        text: '50%'  //set as you wish
      }
    },
    cutoutPercentage: 75,
    legend: {

      display: false
    },
    responsive: true,
    plugins: {

      series: {

        label: {
          position: "inside",
          text: 'total', // or "inside" | "outside"
          display: false
        }
      },
      doughnutlabel: {
        labels: [{
          text: '550',
          font: {
            size: 20,
            weight: 'bold'
          }
        }, {
          text: 'total'
        }
        ]
      },

      legend: {
        display: false,
        align: "start",
        position: 'right',

      },


    }
  },
};
