import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
    title: 'Component/Forms/rds-checkbox',
    component:AppComponent ,
    argTypes: {
         
    }
} as Meta

const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
  });

export const Checkbox = Template.bind({})
Checkbox.args = {
 label:'default checkbox',
 checked:false,
 disabled:false,
 switch:false,
 inline:false,
 state:'checkbox',
 id:"checkboxid"
}
