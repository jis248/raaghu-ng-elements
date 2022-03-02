
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AlertComponent } from './alert/alert.component';

export default {
  title: 'Elements/Alert',
  component: AlertComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  },
} as Meta;

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  // showicon:false,
  dismisable: true,
  alertOpen: true,
  heading: ''

}

