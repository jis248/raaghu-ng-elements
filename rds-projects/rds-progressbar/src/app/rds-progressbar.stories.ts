import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
    title: 'Elements/rds-progressbar',
    component:AppComponent ,
    argTypes: {
      progressIndicatorColor: {
          options: ['bg-info', 'bg-warning','bg-success','bg-danger','default'],
          control: { type: 'select' }
        },
        
        customIndicatorColor: {control: { type: 'color' }},
          striped:{
            options:['default','progress-bar-striped'],
            control: { type: 'radio' }
          },
        
          width:{control: { type: 'text' }},
          animation:{control: { type: 'boolean' }},
          label:{control: { type: 'boolean' }},
          height:{control: { type: 'text' }},
          //showMulitplebar:{control: { type: 'boolean' }}       
    }
  } as Meta;

  const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
  });

export const Progressbar = Template.bind({});
Progressbar.args = {
  progressIndicatorColor:'',
  striped:'default',
  customIndicatorColor:'', 
  width:'25%',
  animation: false,
  label:false,
  height:'default', 
};


