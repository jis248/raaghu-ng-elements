import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
    title: 'Elements/Multiple Progressbar',
    component:AppComponent ,
    argTypes: {
    }
  } as Meta;


  const Template: Story<AppComponent> = (args:AppComponent) => ({
    props: args,
  });

export const MultipleProgressbar = Template.bind({});
MultipleProgressbar.args ={
    progressvalues : [{width:"50%",background:'bg-success',stripe:'progress-bar-striped',
     animation:'progress-bar-animated'},{width:"20%",background:'bg-danger'}]
}
