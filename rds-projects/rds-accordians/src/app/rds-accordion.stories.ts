// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {AppComponent as RdsAccordion } from './app.component';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { AccordionItemComponent } from './accordion-item/accordion-item.component'
import { CommonModule } from '@angular/common';


export default {
  title: 'Elements/Accordion',
  component: RdsAccordion,
  decorators: [
    moduleMetadata({
      declarations: [RdsAccordion, AccordionItemComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    onClose: { action: 'clicked'},
    onShow: { action: 'clicked'},
   },
} as Meta;

const Template: Story<RdsAccordion> = (args: RdsAccordion) => ({
  props: {...args},
  template: `<rds-accordion></rds-accordion>`,
});
export const Basic: Story<RdsAccordion> = (args) => ({
  props: args,
  template: `
    <rds-accordion>
      <accordion-item title="Section 1 title" (onClose)="onClose($event)" (onShow)="onShow($event)" [expanded]="expandall"  [content]="content">
      <ng-template #content>
      <h3>Custom </h3>
      </ng-template>
      </accordion-item>
      <accordion-item title="Section 2 title" (onClose)="onClose($event)" (onShow)="onShow($event)" [expanded]="expandall"  [content]="content">
    </accordion-item>
    </rds-accordion>
      <ng-template #accordion>
        <span>Custom content</span>
      </ng-template>`,
});
export const withFlush: Story<RdsAccordion> = (args) => ({
  props: args,
  template: `
    <rds-accordion [flush] = "true">
      <accordion-item title="Section 1 title" (onClose)="onClose($event)" (onShow)="onShow($event)" [content]="content">
      <ng-template #content>
      this is content updated
      </ng-template>

      </accordion-item>
      <accordion-item title="Section 2 title" (onClose)="onClose($event)" (onShow)="onShow($event)" [content]="content">
     <ng-template #content>
     <p> hello i am in paragarph tag</p>
     </ng-template>
    </accordion-item>
    </rds-accordion>`,
});
