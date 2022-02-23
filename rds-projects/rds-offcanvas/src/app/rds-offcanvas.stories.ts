import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component'

export default {
  title: 'Elements/Offcanvas',
  component: AppComponent,
  argTypes: {
    onShow:{ click: "clicked"},
    onClose:{ click: "clicked"},

  },
  } as Meta;
  const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
  template: `
  <button
  class="btn btn-primary"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#canvas1"
  aria-controls="canvas1"
  (click) = "onShow($event)"
>
  canvas button
</button>
  <rds-offcanvas (onClose) = "onClose($event)" (onShow) = "onShow($event)" [offId] = "offId">
  <p>Try scrolling the rest of the page to see this option in action.</p>
  </rds-offcanvas>
      `
  });


  export const offcanvas = Template.bind({});
  offcanvas.args ={
    offId:'canvas1',
    placement: 'bottom ',
    backDrop: 'Scrolling',
  }