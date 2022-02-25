import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsCheckbox } from './app.component';
import { action } from "@storybook/addon-actions";
export default {
    title: 'Elements/Checkbox',
    component: RdsCheckbox ,
    argTypes: {
         
    },
    excludeStories: /.*Data$/
} as Meta

const Template: Story<RdsCheckbox> = (args: RdsCheckbox) => ({
    props: { 
      ...args,
      onCheck: actionsData.onCheck,
      onUncheck: actionsData.onUncheck
    }
});
export const actionsData = {
  onUncheck: action("onUncheck"),
  onCheck: action("onCheck")
};

export const Checkbox = Template.bind({})
Checkbox.args = {
 label:'default checkbox',
 checked:false,
 disabled:false,
 switch:false,
 inline:false,
 state:'checkbox',
 id:"checkboxid",
 withLabel: true,
 isInputGroup: true
}
