import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';


export default {
    title: 'Elements/Color Picker',
    component:AppComponent ,
    argTypes: {

    }
} as Meta

const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
  });

  export const ColorPicker = Template.bind({})
