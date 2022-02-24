import { Story, Meta } from '@storybook/angular/types-6-0';
import {AppComponent as MicroInteractionsComponent } from './app.component';


export default {
  title: 'Elements/Micro Interactions',
  component: MicroInteractionsComponent,
} as Meta

const Template: Story<MicroInteractionsComponent> = (args: MicroInteractionsComponent) => ({
});

export const MicroInteractions = Template.bind({})
