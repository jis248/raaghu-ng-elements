import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
    title: 'Elements/Radar Chart',
    component: AppComponent,
    argTypes: {
        canvasBackgroundColor: { control: 'color' },
        ChartStyle: {
            options: ['Dark', 'light'],
        }
    },

} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: args,
});

export const RadarChart = Template.bind({});

RadarChart.args = {

    chartDatasets: [
        {
            label: 'Dataset 1',
            data: [0.5, 0.8, 0.4, 0.6, 0.7, 0.2, 0.9],
            borderColor: ['#ff9f40'],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            fill: false,
            pointStyle: 'circle',
            pointRadius: 2,

        },
        {
            label: 'Dataset 2',
            data: [0.9, 0.3, 0.8, 0.9, 0.1, 0.7, 0.2],
            borderColor: ['#ff6384'],
            backgroundColor: ['rgba(255, 206, 86, 0.2)'],
            fill: true,
            pointStyle: 'circle',
            pointRadius: 2,

        },
        {
            label: 'Dataset 3',
            data: [0.7, 0.2, 0.1, 0.9, 0.8, 0.4, 0.7],
            borderColor: ['#83BE5A'],
            backgroundColor: ['rgba(255, 240, 204, 0.2)'],
            fill: false,
            pointStyle: 'circle',
            pointRadius: 2,
        }
    ],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    chartWidth: 400,

    chartOptions: {
        responsive: false,
        chartArea: {
            backgroundColor: 'rgba(251, 85, 85, 0.4)'
        },
        plugins: {

            title: {
                display: true,
                text: 'Radar Chart'
            },
            legend: {
                position: 'left',
                align: "start",

                pointStyle: 'rectRot',
                pointRadius: 5,
                labels: {

                    usePointStyle: true
                }

            },
            tooltip: {
                usePointStyle: true,
            },
            scale: {
                type: 'line',
                angleLines: {
                    display: true
                },
            },

        },

    },

};





