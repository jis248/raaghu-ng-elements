import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
    title: 'Elements/Progress bar',
    component:AppComponent ,
    argTypes: {
      colorType: {
          options: ['bg-info', 'bg-warning','bg-success','bg-danger','default'],
          control: { type: 'select' }
        },

        customColor: {control: { type: 'color' }},
          striped:{
            options:['default','progress-bar-striped'],
            control: { type: 'radio' }
          },

          progressWidth:{control: { type: 'text' }},
          animation:{control: { type: 'boolean' }},
          label:{control: { type: 'boolean' }},
          height:{control: { type: 'text' }},
          progressbar_MaxWidth:{control: { type: 'text' }},
          //showMulitplebar:{control: { type: 'boolean' }}
    }
  } as Meta;

  const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
  });

export const Progressbar = Template.bind({});
Progressbar.args = {
  colorType:'default',
  striped:'default',
  customColor:'',
  progressWidth:'400',
  animation: false,
  label:false,
  height:'15',
  role:'single',
  progressbar_MaxWidth:'800'
};

export const multi_Progressbar = Template.bind({});
multi_Progressbar.args = {
  colorType:'default',
  striped:'default',
  customColor:'',
  progressWidth:'25',
  animation: false,
  label:false,
  height:'15',
  role:'multiple',
  progressvalues : [{progressWidth:"50%",background:'bg-success',stripe:'progress-bar-striped',
     animation:'progress-bar-animated'},{progressWidth:"20%",background:'bg-danger'}],
     progressbar_MaxWidth:'400'
};

