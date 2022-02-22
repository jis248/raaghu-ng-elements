import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
    title: 'rds-tags',
    component:AppComponent ,
    decorators: [
      moduleMetadata({

        imports: [CommonModule,FormsModule],
      }),
    ],
    argTypes: {

            backgroundColor: { control: 'color' },
            borderColor: { control: 'color' },
            Color: { control: 'color' },
            Tagtype: {
                options: ['Square','Round'],
                control: { type: 'radio' }
              },
              Borderstyle:{
                options: ['none','dotted','solid'],
                control: {type: 'select' }
             },
             CloseButtonStyle:{
                options: ['Normal','Fill'],
                control: { type: 'radio' }
             }

    }
} as Meta

const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
  });

  export const basic = Template.bind({})
  basic.args = {

    backgroundColor:'',
    borderColor:'',
    color:'',
    tagType:'Square',
    closeButtonStyle:'Normal',
    roles: 'Basic'

 }

 export const TagWithScroll = Template.bind({})
 TagWithScroll.args = {

   backgroundColor:'',
   borderColor:'',
   color:'',
   tagType:'Square',
   closeButtonStyle:'Normal',
   roles: 'TagWithScroll'

}
