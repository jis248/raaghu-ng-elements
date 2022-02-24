import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsCheckbox } from './app.component';

export default {
    title: 'Elements/Checkbox',
    component:RdsCheckbox ,
    argTypes: {
         
    }
} as Meta

const Template: Story<RdsCheckbox> = (args:RdsCheckbox) => ({
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
