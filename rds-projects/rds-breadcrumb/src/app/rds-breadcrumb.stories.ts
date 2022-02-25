import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {

  title: 'Elements/Breadcrumbs',

  component: AppComponent ,

  argTypes: {
    color: { control: 'color' }

  },

} as Meta;

const Template: Story<AppComponent > = (args: AppComponent ) => ({

  props: args,



});
export const Basic = Template.bind({});
Basic.args={
 role: 'basic',
 iconShow: true,
}

export const Advanced = Template.bind({});
Advanced.args={
 role: 'Advanced',
 iconShow: false,
}

export const withDivider  = Template.bind({});
withDivider.args={
 role: 'withDivider',
 iconShow: true,
}
