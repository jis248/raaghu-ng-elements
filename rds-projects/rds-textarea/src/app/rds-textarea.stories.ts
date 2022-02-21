import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';


export default {
    title: 'rds-textarea',
    component:AppComponent ,
    argTypes: {
        disabled:{control:{ type:'boolean'}},
        rows:{control:{ type:'text'}},
        readonly:{control:{ type:'boolean'}},
        value:{control:{ type:'text'}},
    }
} as Meta

const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
  });

  export const InputText = Template.bind({})
  InputText.args = {
    disabled:false,
    rows: '3',
    readonly:false,
    label:'Text area',
    placeholderText:"Add Placeholder",
    floatinginputLabel:""
  }
