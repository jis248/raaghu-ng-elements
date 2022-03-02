// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsButtonGroupComponent } from './rds-btn-group.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Elements/Button Group',
  component: RdsButtonGroupComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<RdsButtonGroupComponent> = (args: RdsButtonGroupComponent) => ({
  props: args,
});

export const horizontal = Template.bind({});
horizontal.args = {
  vertical: false,
  size: 'medium',
  type : 'primary',
  role: 'button',
  buttonGroupItem: [

    {
      label: 'Left',
      iconClass: '',
      id: '',
      name: '',
     },
     {
      label: 'middle',
      iconClass: '',
      id: '',
      name: '',
     },
     {
      label: 'right',
      iconClass: '',
      id: '',
      name: '',
     },
]
};

export const Vertical = Template.bind({});
Vertical.args = {
    vertical: true,
    size: 'medium',
    type: 'primary',
    buttonGroupItem: [

        {
          label: 'Left',
          iconClass: '',
          id: '',
          name: '',
         },
         {
          label: 'middle',
          iconClass: '',
          id: '',
          name: '',
         },
         {
          label: 'right',
          iconClass: '',
          id: '',
          name: '',
         },
    ]
};

export const IconButtonGroup = Template.bind({});
IconButtonGroup.args = {
    vertical: false,
    size: 'medium',
    type: 'primary',
    buttonGroupItem: [
      {
        label: '',
        iconClass: 'bi bi-gear',
        id: '',
        name: '',
      },
      {
        label: '',
        iconClass: 'bi bi-trash',
        id: '',
        name: '',
      },
      {
        label: '',
        iconClass: 'bi bi-chat-left-dots',
        id: '',
        name: '',
      }
    ]
};

export const RadioButtonGroup = Template.bind({});
RadioButtonGroup.args = {
    vertical: false,
    size: 'medium',
    type: 'primary',
    outline: true,
    role: 'radio',
    buttonGroupItem: [
      {
        label: 'radio 1',
        iconClass: '',
        id: 'radio1',
        name: 'btnradio',
      },
      {
        label: 'radio 2',
        iconClass: '',
        id: 'radio2',
        name: 'btnradio',
      },
      {
        label: 'radio 3',
        iconClass: '',
        id: 'radio3',
        name: 'btnradio',
      }
    ]
};

export const CheckboxButtonGroup = Template.bind({});
CheckboxButtonGroup.args = {
    vertical: false,
    size: 'medium',
    type: 'primary',
    outline: true,
    role: 'checkbox',
    buttonGroupItem: [
      {
        label: 'checkbox 1',
        iconClass: '',
        id: 'checkbox1',
        name: '',
      },
      {
        label: 'checkbox 2',
        iconClass: '',
        id: 'checkbox2',
        name: '',
      },
      {
        label: 'checkbox 3',
        iconClass: '',
        id: 'checkbox3',
        name: '',
      }
    ]
};
