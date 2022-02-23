import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import {AppComponent as  RdsPopoverComponent } from './app.component';

export default {
    title: 'Elements/Popover',
    component: RdsPopoverComponent,
    decorators: [
      moduleMetadata({
        imports: [CommonModule],
      }),
    ],
} as Meta;

const Template: Story<RdsPopoverComponent> = (args: RdsPopoverComponent) => ({
    props: args,
});

export const PopoverWithButton: Story<RdsPopoverComponent> = (args) => ({
  props: args,
  template:
      `<rds-popover [popoverPosition]= "popoverPosition" 
      [popoverTitle] =  "popoverTitle" (click)="onClick($event)"
      [popoverContent] =  "popoverContent">
      <button class="btn btn-primary"> popover button </button>
      </rds-popover>
      `,
});
PopoverWithButton.args = {
  popoverPosition: 'left',
  popoverTitle: 'popover title',
  popoverContent: 'popover body'
};

export const PopoverWithLink: Story<RdsPopoverComponent> = (args) => ({
  props: args,
  template:
      `<rds-popover [popoverPosition]= "popoverPosition"
      [popoverTitle] =  "popoverTitle"
      [popoverContent] =  "popoverContent"
      [hover] = "hover">
      <a role = "button" href = "#"> link button </a>
      </rds-popover>
      `,
});
PopoverWithLink.args = {
  popoverPosition: 'right',
  popoverTitle: 'popover title',
  popoverContent: 'popover body',
  hover: true,
};
