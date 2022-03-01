import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsOffcanvasComponent } from './rds-offcanvas.component';

export default {
  title: 'Elements/Offcanvas',
  component: RdsOffcanvasComponent,
  argTypes: {
    onShow:{ click: "clicked"},
    onClose:{ click: "clicked"},

  },
  } as Meta;
  const Template: Story<RdsOffcanvasComponent> = (args: RdsOffcanvasComponent) => ({
  props: args,
  template: `
  <rds-offcanvas (onClose) = "onClose($event)" (onShow) = "onShow($event)" [offId] = "offId">
  <p>Try scrolling the rest of the page to see this option in action.</p>
  </rds-offcanvas>
      `
  });


  export const offcanvas = Template.bind({});
  offcanvas.args ={
    // offId:'canvas1',
    // placement: 'bottom ',
    // backDrop: 'Scrolling',
    buttonTitle: 'Button'
  }