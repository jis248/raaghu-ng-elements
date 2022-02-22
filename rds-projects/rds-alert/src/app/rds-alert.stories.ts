
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
  title: 'Elements/Alert',
  component: AppComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  },
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});
export const Basic = Template.bind({});
Basic.args = {
  // showicon:false,
  dismisable: true,
  alertOpen: true,
  heading: ''

}

