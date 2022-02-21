
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {
  title: 'rds-toast',
  component: AppComponent,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // borderColor: { control: 'color' },
    // Color: { control: 'color' },
    background: {
      options: ['bg-info', 'bg-warning', 'bg-success', 'bg-danger', 'bg-primary', 'default'],
      control: { type: 'select' }
    },
    custcolor: { control: { type: 'color' } },
    textColor: { control: { type: 'color' } }
  },
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

export const Toast = Template.bind({})
Toast.args = {
  customColor: false,
  withHeader: false,
  withImage: false,
  custcolor: '',

  headerTitle: 'Bootstrap',
  time: '11 Seconds ago',
  textColor: ''
}

const Content: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
  template: `<rds-toast
    [withImage]="false"
    [withHeader]="false"
    background="undefined"
    [customColor]="false"
    custcolor=""
    headerTitle="Bootstrap"
    time="11 Seconds ago"
    textColor=""
  >
  <div class="mt-2 p-2 border-top">
  <button type="button" class="btn btn-primary btn-sm">Take action</button>&nbsp;
  <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
   </div>
  </rds-toast>`
});

export const withCallToAction = Content.bind({})
withCallToAction.args = {
  customColor: false,
  withHeader: false,
  withImage: false,
  custcolor: '',

  headerTitle: 'Bootstrap',
  time: '11 Seconds ago',
  textColor: ''
}


const Pos: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
  template: `
    <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
    
    <rds-toast
    [withImage]="false"
    [withHeader]="false"
    background="bg-info"
    [customColor]="false"
    custcolor=""
    headerTitle="Bootstrap"
    time="11 Seconds ago"
    textColor=""
  >
  </rds-toast>
  </div>
  `

});

export const Position = Pos.bind({})
withCallToAction.args = {
  customColor: false,
  withHeader: false,
  withImage: false,
  custcolor: '',
  position: 'Bottom-Right',
  headerTitle: 'Bootstrap',
  time: '11 Seconds ago',
  textColor: ''
}
