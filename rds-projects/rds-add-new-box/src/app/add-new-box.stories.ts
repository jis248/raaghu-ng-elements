import { Story, Meta } from '@storybook/angular/types-6-0';
import { AddNewBoxComponent } from './add-new-box/add-new-box.component';

export default {
  title: 'Elements/Add New Box',
  component: AddNewBoxComponent,
} as Meta

const Template: Story<AddNewBoxComponent> = (args: AddNewBoxComponent) => ({

});

export const AddNewBox = Template.bind({})
