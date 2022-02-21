import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
  title: 'rds-spinner',
  component: AppComponent,
  argTypes: {
    // Color: {control: 'color'},

  },
  } as Meta;
  const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
  });

  export const spinner = Template.bind({});

  spinner.args = {
    spinnerType : false,

  };

