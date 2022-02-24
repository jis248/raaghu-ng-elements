
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsAlert } from './app.component';

export default {
  title: 'Elements/Alert',
  component: RdsAlert,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  },
} as Meta;
const Template: Story<RdsAlert> = (args: RdsAlert) => ({
  props: args,
});
export const Basic = Template.bind({});
Basic.args = {
  // showicon:false,
  dismisable: true,
  alertOpen: true,
  heading: ''

}

