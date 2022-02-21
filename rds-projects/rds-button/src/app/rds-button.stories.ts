// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'rds-button',
  component: AppComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    color: { control: 'color' },
    click: { action: 'clicked'}
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   label: 'Button',
// };

// export const Sec = Template.bind({});
// // More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   label: 'Button',
// };

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'button',
  block: false
};

export const Disable = Template.bind({});
Disable.args = {
  label: 'Disable',
  disabled: true,
};

export const Outline = Template.bind({});
Outline.args = {
  outlineButton: true,
  label: 'outline',
};

export const CloseButton = Template.bind({});
CloseButton.args = {
    iconClass: 'bi bi-x-lg',
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  // role: 'tooltip',
  label: 'tooltip button',
  tooltipTitle: 'hello this is tooltip',
  tooltipPosition: 'bottom',
};

export const IconButton = Template.bind({});
IconButton.args = {
   roundedButton: true,
   iconClass: 'bi bi-pencil-fill'
};

export const Toggle = Template.bind({});
Toggle.args = {
  toggleButton: true,
  label: 'check button',
};
