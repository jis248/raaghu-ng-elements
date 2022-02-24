
import { Story, Meta } from '@storybook/angular/types-6-0';
import {AppComponent as RdsTextEditorComponent } from './app.component';


export default {
  title: 'Elements/Text Editor',
  component: RdsTextEditorComponent,
} as Meta

const Template: Story<RdsTextEditorComponent> = (args: RdsTextEditorComponent) => ({
});

export const TextEditor = Template.bind({})

