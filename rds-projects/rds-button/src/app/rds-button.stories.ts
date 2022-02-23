// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './rds-button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Elements/rds-button',
  component: AppComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    color: { control: 'color' },
    click: { action: 'clicked'},
    colorType: {
      options: ['primary', 'secondary','success','danger','warning','info','light','dark'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'large', 'medium'],
      control:{ type: 'select' }
    }
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

export const Normal_state = Template.bind({});
Normal_state.args = {
  colorType: 'primary',
  label: 'button',
  block: false,
  size: 'medium'
};

export const Disable = Template.bind({});
Disable.args = {
  label: 'Disable',
  colorType: 'primary',
  disabled: true,
  size: 'medium'
};

export const Outline = Template.bind({});
Outline.args = {
  outlineButton: true,
  colorType: 'primary',
  label: 'outline',
  size: 'medium'
};

export const CloseButton = Template.bind({});
CloseButton.args = {
    iconClass: 'bi bi-x-lg',
    colorType: 'primary',
    label: '',
    size: 'medium'
};

export const With_Icon = Template.bind({});
With_Icon.args = {
   roundedButton: false,
   iconClass: 'bi bi-pencil-fill',
   colorType: 'primary',
   label: '',
   size: 'medium'
};

export const Icon_With_label = Template.bind({});
Icon_With_label.args = {
   roundedButton: false,
   iconClass: 'bi bi-pencil-fill',
   colorType: 'primary',
   label: 'button',
   size: 'medium'
};

// export const Toggle = Template.bind({});
// Toggle.args = {
//   toggleButton: true,
//   label: 'check button',
//   colorType: 'primary',
// };
