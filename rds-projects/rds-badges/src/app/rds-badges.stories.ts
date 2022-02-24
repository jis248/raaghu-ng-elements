import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
//import { ButtonComponent } from '../button/button.component';

import {AppComponent as RdsBadgesComponent } from './app.component';


export default {

  title: 'Elements/Badge',

  component: RdsBadgesComponent,
  decorators: [
    moduleMetadata({
      //declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],

  argTypes: {
     Color: { control: 'color' },
     size: {
      options: ['xlg', 'lg','mid','small','smaller','smallest'],
      control: { type: 'select' }
    },

  },

} as Meta;

const Template: Story<RdsBadgesComponent> = (args: RdsBadgesComponent) => ({

  props: args,
  

});


export const Basic = Template.bind({});
Basic.args = {
  types : 'primary',
  size:'mid'
};

const BadgeButton: Story<RdsBadgesComponent> = (args: RdsBadgesComponent) => ({

  props: args,
  template :`

<button type="button" class="btn btn-primary" (onClick)="onClick($event)">
</button>

<span right>s
<rds-badges
size="smallest"
Types="light"
label="9"
[pillBadges]="false"

Color="#000000"
></rds-badges></span>


`

});

export const BadgeAsButton = BadgeButton.bind({});
Basic.args = {
  size:'smallest'
};


const BadgePositioned: Story<RdsBadgesComponent> = (args: RdsBadgesComponent) => ({

  props: args,
  template :`<storybook-button
  buttonType="primary"
  type="button"
  size="medium"
  [buttonDisable]="false"
  [outlineButton]="false"
  [RoundedIcon]="false"
  iconClass=""
  label="button"
  position="bottom"
  role="basic"
  class="position-relative"
  (onClick)="onClick($event)"
>
<span right>
<rds-badges
size="smallest"
Types="danger"
label="9"
[pillBadges]="true"
Color="#ffffff"
[positioned]="true"
></rds-badges></span>

</storybook-button>
`

});

export const BadgewithPositioned = BadgePositioned.bind({});
BadgewithPositioned.args = {
  size:'smallest',
  positioned:true
};

const BadgeIcon: Story<RdsBadgesComponent> = (args: RdsBadgesComponent) => ({

  props: args,
  template :`
  <storybook-button
  buttonType="primary"
  type="button"
  size="medium"
  [buttonDisable]="false"
  [outlineButton]="false"
  [RoundedIcon]="true"
  iconClass=""
  position="bottom"
  role="basic"
  class="position-relative"
  (onClick)="onClick($event)"
>

<svg right xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
<path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
</svg>

<rds-badges right
size="smallest"
Types="danger"
label="9"
[pillBadges]="false"
Color="#ffffff"
[positioned]="true"
[iconBadge] ="true"
></rds-badges>

</storybook-button>

  `

});

export const BadgeWithIcon = BadgeIcon.bind({});
BadgeWithIcon.args = {
};

