import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
  title: 'Elements/Pagination',
  component: AppComponent,
  argTypes: {

  },
  } as Meta;
  const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
  });


  export const basic = Template.bind({});
  basic.args = {
      totalRecords: 10,
      recordsPerPage:5,
      role: 'Basic',
};
export const advanced = Template.bind({});
advanced.args = {
      totalRecords: 10,
      recordsPerPage:5,
      role: 'Advanced',
};
