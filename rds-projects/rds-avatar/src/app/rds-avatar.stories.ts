import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent as RdsAvatarComponent } from './app.component';

export default {
    title: 'Elements/Avatar',
    component:RdsAvatarComponent ,
    argTypes: {
         
    }
} as Meta

const Template: Story<RdsAvatarComponent> = (args:RdsAvatarComponent) => ({
    props: args,
  });

export const avatar = Template.bind({});
