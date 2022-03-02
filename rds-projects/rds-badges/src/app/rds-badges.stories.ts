import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

export default {

  title: 'Elements/Badge',

  component: AppComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],

  argTypes: {
    Color: { control: 'color' },
    size: {
      options: ['xlg', 'lg', 'mid', 'small', 'smaller', 'smallest'],
      control: { type: 'select' }
    },

  },

} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});
export const Basic: Story<AppComponent> = (args) => ({
  props: args,
});
Basic.args = {
  types: 'primary',
  size: 'small',
  label: 'new'
};

export const BadgeButton: Story<AppComponent> = (args) => ({
  props: args,
  template:
    `<button type="button" class="btn btn-primary">
      <span right>Notification
      <rds-badges
      size="smallest"
      Types="light"
      label="9"
      [pillBadges]="false"
      types="secondary"
      Color="#000000"
      ></rds-badges></span>
      </button>
    
  `,

});
BadgeButton.args = {
  size: 'smallest',

};
export const BadgePositioned: Story<AppComponent> = (args) => ({
  props: args,
  template:
    `<button type="button" class="btn btn-ligh position-relative">
      new<span right>
      <rds-badges 
      size="smallest"
      Types="danger"
      label="99+"
      [pillBadges]="true"
      Color="#ffffff"
      [positioned]="true"
      ></rds-badges></span>
      </button>
    
  `,

});
BadgePositioned.args = {
  size: 'smallest',
  positioned: true,
  label: '99+'
};

export const BadgeIcon: Story<AppComponent> = (args) => ({
  props: args,
  template:
    `<button
      class="position-relative btn btn-ligh">
   <svg right xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
    <rds-badges right
    size="smallest"
    types="danger"
    label="9"
    [pillBadges]="false"
    Color="#ffffff"
    [positioned]="true"
    [iconBadge] ="true"
    ></rds-badges>
    </button>
    
  `,

});
BadgeIcon.args = {

};

