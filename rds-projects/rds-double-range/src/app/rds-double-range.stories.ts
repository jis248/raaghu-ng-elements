import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';
import { componentWrapperDecorator } from '@storybook/angular';

export default {
  title: 'Elements/DoubleRange',
  component: AppComponent,
  argTypes: {

  },
  decorators: [componentWrapperDecorator((story: any) => `<div style="margin: 3em">${story}</div>`)]
} as Meta

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,

});
export const DoubleRange = Template.bind({})
DoubleRange.args = {}
