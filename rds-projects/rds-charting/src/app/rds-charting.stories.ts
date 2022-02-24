import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsChartingComponent } from './app.component';


export default {
    title: 'Elements/Charting',
    component:RdsChartingComponent ,
} as Meta

const Template: Story<RdsChartingComponent> = (args:RdsChartingComponent) => ({
  });

  export const Charting = Template.bind({})
