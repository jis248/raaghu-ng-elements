import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
    title: 'ELEMENTS/rds-radio-buttons',
    component:AppComponent ,
    argTypes: {
        
         }
} as Meta
const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
  });
  export const RadioButton = Template.bind({})
  RadioButton.args = {
  label:'default radio',
  checked:false,
  disabled:false,
  switch:false,
  inline:false,
  name:'Name for Radio Button',
  id:"Checkid"
}
