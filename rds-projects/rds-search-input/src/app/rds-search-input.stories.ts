import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';


export default {
    title: 'Elements/Search',
    component:AppComponent ,
    argTypes: {
        inputType: {
            options: ['email','text','password'],
            control: { type: 'select' }
          },
        size: {
            options: ['default', 'small','large'],
            control: { type: 'radio' }
          },
        disabled:{control:{ type:'boolean'}},
        readonly:{control:{ type:'boolean'}},
        value:{control:{ type:'text'}},
    }
} as Meta

const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
  });

  export const Search = Template.bind({})
  Search.args = {

    Placeholder:'New',
    icon:'bi bi-search'

  }