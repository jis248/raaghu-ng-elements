import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';


export default {
    title: 'Elements/File Uploader',
    component:AppComponent ,
    argTypes: {
      maxfilesize: { control: {type: 'number'} },
        size: {
            options: ['default', 'small','large'],
            control: { type: 'radio' }
          },
        multipleFiles:{control:{ type:'boolean'}}
    }
} as Meta

const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
  });

  export const Default = Template.bind({})
  Default.args ={
    size:'default',
      multipleFiles:false,
      role: 'default',
      label: 'Single file upload',
  }
//   export const FileUpload = Template.bind({})
//   FileUpload.args = {
//       size:'default',
//       multipleFiles:false,
//       role: 'fileUpload',
//       label: 'file upload',
//   }

//   export const File_upload_with_drag_and_drop = Template.bind({})
//   File_upload_with_drag_and_drop.args = {
//     size:'default',
//     multipleFiles:false,
//     role: 'dragAndDrop',
//     label: 'Drag and Drop',
// }

  export const File_upload_with_Error_message = Template.bind({})
  File_upload_with_Error_message.args = {
    size:'default',
    multipleFiles:false,
    role: 'fileUpload',
    label: 'Multiple file upload',
}
