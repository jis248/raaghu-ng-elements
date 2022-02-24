import { Story, Meta } from '@storybook/angular/types-6-0';
import {AppComponent as  RdsLoadingAnimationComponent } from './app.component';


export default {
    title: 'Elements/Loading Animation',
    component:RdsLoadingAnimationComponent ,
} as Meta

const Template: Story<RdsLoadingAnimationComponent> = (args:RdsLoadingAnimationComponent) => ({
  });

  export const LoadingAnimation = Template.bind({})
